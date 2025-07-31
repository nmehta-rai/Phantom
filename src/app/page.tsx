'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const testSupabase = async () => {
      const { data, error } = await supabase
        .from('test')
        .insert([{ message: '👻 Hello from Phantom' }])
        .select()

      if (error) {
        setMessage('Error: ' + error.message)
      } else {
        setMessage(`Success! Saved: "${data[0].message}"`)
      }
    }

    testSupabase()
  }, [])

  return (
    <main className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold">Phantom Supabase Test</h1>
      <p className="mt-4">{message}</p>
    </main>
  )
}
