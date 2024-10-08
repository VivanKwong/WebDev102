import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vqnwlnodjydlalwzsobs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxbndsbm9kanlkbGFsd3pzb2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5MDQ4MDMsImV4cCI6MjA0MzQ4MDgwM30.pnQ3R7CiPt8vzmcFIuPPcBWUXQ71tp2XRsrnpYeUDjE';
export const supabase = createClient(supabaseUrl, supabaseKey);

