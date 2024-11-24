'use server'

import { CreateProductType, ErrorType } from '@repo/types'
import { revalidateTag } from 'next/cache'

export async function createProduct(
  data: CreateProductType
) {
  try {
    const response = await fetch(`http://localhost:3001/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    revalidateTag('products')

    return await response.json()
  } catch (error) {
    console.error(error)

    const err: ErrorType = {
      name: 'Error',
      message: 'Error creating product',
      status: 500,
    }

    return err
  }
}

export async function getProducts() {
  const response = await fetch(`http://localhost:3001/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['products'] },
  })

  return await response.json()
}
