// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://otdahsfjviypjbnarpde.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZGFoc2Zqdml5cGpibmFycGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzU1NDIsImV4cCI6MjA1ODc1MTU0Mn0.NyUzsFwLzfC8JEEx9qvw8js5goRdWiut5y6uONFBgbs";
// export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://otdahsfjviypjbnarpde.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZGFoc2Zqdml5cGpibmFycGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzU1NDIsImV4cCI6MjA1ODc1MTU0Mn0.NyUzsFwLzfC8JEEx9qvw8js5goRdWiut5y6uONFBgbs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
