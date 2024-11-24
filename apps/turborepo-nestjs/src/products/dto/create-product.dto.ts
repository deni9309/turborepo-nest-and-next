import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @ApiProperty({ required: true, description: "The product's name" })
  name: string

  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: 'A short description for the product.',
  })
  description?: string

  @ApiProperty({
    type: Number,
    description: "The product's price.",
    required: true,
  })
  price: number
}
