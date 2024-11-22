import { Injectable } from '@nestjs/common'
import { CreateProductRequest, Product } from '@repo/types'
import { randomUUID } from 'crypto'

@Injectable()
export class ProductsService {
  // In-memory database
  private readonly products: Product[] = []

  createProduct(createProductRequest: CreateProductRequest) {
    const product = {
      ...createProductRequest,
      id: randomUUID(), // Math.random().toString(36).substring(7)
    }

    this.products.push(product)

    return product
  }

  getProducts() {
    return this.products
  }
}
