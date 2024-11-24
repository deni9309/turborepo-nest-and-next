import { Injectable } from '@nestjs/common'

import { randomUUID } from 'crypto'
import { CreateProductDto } from './dto/create-product.dto'
import { Product } from './entity/product'

@Injectable()
export class ProductsService {
  // In-memory database
  private readonly products: Product[] = [
    {
      id: 'fft0kpug8-AStdyfj-fyf',
      name: 'Pink the Panter tshirt',
      price: 10,
      description: 'Cotton fabric tshirt',
    },
  ]

  createProduct(createProductRequest: CreateProductDto) {
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
