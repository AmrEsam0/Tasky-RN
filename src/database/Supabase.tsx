import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://zeomkmqzihgvotruljno.supabase.co';

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplb21rbXF6aWhndm90cnVsam5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxNTI5ODksImV4cCI6MTk5MTcyODk4OX0.7HidEuFJd338KM7Uce_96-BykuUZpzhdLvhPsRrgITg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
