import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vlakbuqcgmvhyxrifvfj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsYWtidXFjZ212aHl4cmlmdmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNjkyOTMsImV4cCI6MjA0NTg0NTI5M30._fKQH8mlMeXunEMyUcm-nQTTRD2BzKdoeDKkNjwWR7I";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
