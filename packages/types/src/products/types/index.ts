export type ProductType = {
  id: string
  name: string
  description?: string
  price: number
}

export type CreateProductType = {
  name: string
  description?: string
  price: number
}

export type ErrorType = {
  name?: string
  status?: number
  message?: string
}