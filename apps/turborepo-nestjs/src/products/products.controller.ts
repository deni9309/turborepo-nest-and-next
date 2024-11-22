import { Controller, Post, Body, Get } from '@nestjs/common'
import { CreateProductRequest } from '@repo/types'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductRequest: CreateProductRequest) {
    return this.productsService.createProduct(createProductRequest)
  }

  @Get()
  async getProducts() {
    return this.productsService.getProducts()
  }
}
