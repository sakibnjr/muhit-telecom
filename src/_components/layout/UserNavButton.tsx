'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LogOut, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/_context/AuthContext';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

export function UserNavButton() {
  const { user, signInWithGoogle, signOut, isLoading } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="hidden sm:flex size-8 rounded-full bg-white/10 animate-pulse items-center justify-center" />
    );
  }

  if (!user) {
    return (
      <button
        type="button"
        onClick={signInWithGoogle}
        className="group hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/20 bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all select-none"
        title="Sign in with Google"
        aria-label="Sign in with Google"
      >
        <GoogleIcon className="size-4 shrink-0" />
        <span>Sign In</span>
      </button>
    );
  }

  const name =
    (user.user_metadata?.full_name as string) ||
    (user.user_metadata?.name as string) ||
    user.email?.split('@')[0] ||
    'User';
  const avatarUrl =
    (user.user_metadata?.avatar_url as string) ||
    (user.user_metadata?.picture as string) ||
    undefined;

  return (
    <div className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-1.5 py-1 rounded-xl hover:bg-white/10 transition-colors text-left"
        aria-label="User Account"
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            width={32}
            height={32}
            unoptimized
            className="size-8 rounded-full object-cover border-2 border-white/60 shadow-xs"
          />
        ) : (
          <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs border border-white/30">
            {name.slice(0, 1).toUpperCase()}
          </div>
        )}
        <div className="hidden xl:block">
          <p className="text-xs font-bold text-white line-clamp-1 max-w-[110px] leading-tight">{name}</p>
          <span className="text-[10px] text-white/70 block leading-tight">Google User</span>
        </div>
      </button>

      {dropdownOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setDropdownOpen(false)} />
          <div className="absolute right-0 mt-2 w-60 rounded-xl border border-border bg-card p-3 shadow-xl z-40 text-foreground animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-2.5 border-b border-border/60 pb-3 mb-2">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={name}
                  width={36}
                  height={36}
                  unoptimized
                  className="size-9 rounded-full object-cover border border-border"
                />
              ) : (
                <div className="size-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                  {name.slice(0, 1).toUpperCase()}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="font-bold text-xs text-foreground flex items-center gap-1 truncate">
                  <span className="truncate">{name}</span>
                  <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                </p>
                <p className="text-[10px] text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={async () => {
                await signOut();
                setDropdownOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="size-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
