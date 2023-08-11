import 'react-native-url-polyfill/auto'
import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js'

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key)
  },
}

const supabaseUrl =  'https://sxocqzocqpkyeyxugbbd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4b2Nxem9jcXBreWV5eHVnYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODg1NTgsImV4cCI6MjAwNzE2NDU1OH0.KKearxlq584huWxuDr4WzuQVkUJhzJSy39F6T3D6Jlo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter ,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4b2Nxem9jcXBreWV5eHVnYmJkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MTU4ODU1OCwiZXhwIjoyMDA3MTY0NTU4fQ.r22y6SfAw4nwT3JlF-VI_q9xf1h0Yi1FME4w0fYC_Ws