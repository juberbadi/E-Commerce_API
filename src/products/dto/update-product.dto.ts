import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {

  @ApiProperty()
  title: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discount: number;

  @ApiProperty()
  priceWithDiscount: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: string;
}
