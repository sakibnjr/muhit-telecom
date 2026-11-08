'use client';

import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setupAuth = async () => {
      const href = window.location.href;
      const accessMatch = href.match(/access_token=([^&#]+)/);
      const refreshMatch = href.match(/refresh_token=([^&#]+)/);

      if (accessMatch && refreshMatch) {
        try {
          const { data } = await supabase.auth.setSession({
            access_token: decodeURIComponent(accessMatch[1]),
            refresh_token: decodeURIComponent(refreshMatch[1]),
          });
          if (data?.session?.user) {
            setUser(data.session.user);
            setIsLoading(false);
            window.history.replaceState({}, '', window.location.pathname);
            return;
          }
        } catch {
          // Fall through to getSession
        }
      }

      if (window.location.search.includes('error=') || window.location.hash.includes('error=')) {
        window.history.replaceState({}, '', window.location.pathname);
      }

      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setIsLoading(false);
    };

    setupAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    if (typeof window === 'undefined') return;
    const cleanOrigin = `${window.location.origin}${window.location.pathname}`;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: cleanOrigin,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, isLoading, signInWithGoogle, signOut }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
