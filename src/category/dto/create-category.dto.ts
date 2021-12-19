import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto{

  @IsNotEmpty()
  @ApiProperty()
  categoryname: string;

}
