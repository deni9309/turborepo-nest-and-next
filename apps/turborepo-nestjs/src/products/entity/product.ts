import { ApiProperty } from '@nestjs/swagger'

import { CreateProductDto } from '../dto/create-product.dto'

export class Product extends CreateProductDto {
  @ApiProperty({
    required: true,
    description: "The product's id",
    type: String,
  })
  id: string
}
