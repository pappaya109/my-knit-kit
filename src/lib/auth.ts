import { supabase } from './supabase';

export async function ensureAnonymousSession() {
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) throw sessionError;
  if (session) return;
  const { error: signInError } = await supabase.auth.signInAnonymously();
  if (signInError) throw signInError;
}
