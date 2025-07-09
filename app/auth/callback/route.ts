import { NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabaseClient'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('Error exchanging code for session:', error)
        return NextResponse.redirect(new URL('/auth/error', request.url))
      }
    } catch (error) {
      console.error('Error in auth callback:', error)
      return NextResponse.redirect(new URL('/auth/error', request.url))
    }
  }

  // Redirect to home page after successful authentication
  return NextResponse.redirect(new URL('/', request.url))
}