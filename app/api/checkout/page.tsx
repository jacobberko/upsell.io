'use client'
import { useState } from 'react'

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    // 1) Call your API to create the session
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // you could send JSON here if you want dynamic price/qty:
      // body: JSON.stringify({ priceId: 'price_abc123', quantity: 2 })
    })

    if (!res.ok) {
      console.error('Checkout session creation failed:', await res.text())
      setLoading(false)
      return
    }

    const { url } = await res.json()
    // 2) Redirect the browser to Stripe Checkout
    window.location.href = url
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