'use client'
import { useState } from 'react'

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    console.log('🔵 handleCheckout fired')
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ priceId: 'price_abc123', quantity: 1 })
      })
      console.log('🟢 fetch returned status:', res.status)
      const text = await res.text()
      console.log('🟢 fetch returned body:', text)
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const { url } = JSON.parse(text)
      console.log('🟢 session URL:', url)
      window.location.href = url
    } catch (err) {
      console.error('🔴 Checkout error:', err)
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Get Premium Access</h1>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? 'Redirecting…' : 'Subscribe Now'}
      </button>
    </div>
  )
}