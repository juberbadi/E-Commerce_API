import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ApiParam, ApiTags, ApiBearerAuth, ApiUnauthorizedResponse, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from '../category/category.entity';
import { GetCategory } from '../category/get-category.decorator';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from '../auth/user.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiResponse({ status:200, description: 'Ok' })
  getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  getProductsById(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post()
  @ApiCreatedResponse({ description: 'Ok'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  createProduct(@Body() createProductDto: CreateProductDto, @GetUser() user: User): Promise<Product> {
    return this.productsService.createProduct(createProductDto, user);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Patch('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  updateProduct(@Param('id') id:string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Delete('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: 'Not found(message: Product with this id not found)' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  deleteProduct(@Param('id') id:string): Promise<void> {
    return this.productsService.deleteProduct(id);
  }
}
