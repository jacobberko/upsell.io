import Stripe from 'stripe'
import { NextResponse } from 'next/server'


export async function GET() {
  return NextResponse.json({ message: 'Checkout API is up. Use POST to create sessions.' })
}

export async function POST(request: Request) {
  // Initialize Stripe at request time
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-05-28.basil'
  })
  // You can also read JSON from the request if you want dynamic quantities:
  // const { priceId, quantity } = await request.json()

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'your_stripe_price_id', // ← replace with your actual Price ID
        quantity: 1
      }
    ],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`
  })

  return NextResponse.json({ url: session.url })
}