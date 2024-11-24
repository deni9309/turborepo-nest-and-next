import { Controller, Post, Body, Get } from '@nestjs/common'
import { ProductRequest } from '@repo/types'
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { Product } from './entity/product'

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create new product' })
  @ApiCreatedResponse({
    description: 'The product has been successfully created.',
    type: ProductRequest,
  })
  async createProduct(@Body() createProductRequest: CreateProductDto) {
    return this.productsService.createProduct(createProductRequest)
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({
    description: 'The products have been successfully fetched.',
    type: Product,
    isArray: true,
  })
  async getProducts() {
    return this.productsService.getProducts()
  }
}
