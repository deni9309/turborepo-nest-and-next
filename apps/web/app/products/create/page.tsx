import CreateProductForm from '@/components/create-product-form'
import React from 'react'

const CreateProductPage = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center w-full mx-auto mt-10'>
      <h1 className='text-2xl font-semibold'>Create Product</h1>
      <CreateProductForm />
    </div>
  )
}

export default CreateProductPage
