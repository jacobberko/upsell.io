// app/drops/page.tsx
import { supabase } from '../../lib/supabaseClient'

export default async function Drops() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('drop_time')

  if (error) {
    return <p>Error loading drops: {error.message}</p>
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Upcoming Drops</h1>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="mb-3">
            <h2 className="text-lg">{product.name}</h2>
            <p className="text-sm text-gray-600">
              {new Date(product.drop_time).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p>No upcoming drops.</p>
      )}
    </div>
  )
}