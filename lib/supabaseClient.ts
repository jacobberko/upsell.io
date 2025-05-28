// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// These env vars must match exactly what you set in Vercel & your .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a single Supabase client for your whole app
export const supabase = createClient(supabaseUrl, supabaseAnon)
