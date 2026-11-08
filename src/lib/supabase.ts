import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://prqixxrrdmgpunulfxgb.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBycWl4eHJyZG1ncHVudWxmeGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwNDc1OTgsImV4cCI6MjEwOTYyMzU5OH0.ABqo6CkaDtaD9saHSSU4Tg3M3Bv--TE3eFnjnGvyTmo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

