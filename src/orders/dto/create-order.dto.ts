import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;

  @IsNotEmpty()
  @ApiProperty()
  totalDiscount: number;

  @IsNotEmpty()
  @ApiProperty()
  totalAmount: number;

  @IsNotEmpty()
  @ApiProperty()
  paymentMode: string;

  @IsNotEmpty()
  @ApiProperty()
  product: number;

  @IsNotEmpty()
  @ApiProperty()
  deliveryAddress: number;
}
