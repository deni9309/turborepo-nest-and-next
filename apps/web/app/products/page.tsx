'use client'

import { getProducts } from '@/actions/product.actions'
import { ProductType } from '@repo/types'

import { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  function fetchProducts() {
    setLoading(true)
    getProducts()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setProducts(data)
        } else setProducts([])
      })
      .catch(() => setProducts([]))
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className='flex flex-col gap-6 items-center justify-center w-full mx-auto mt-10'>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Products
