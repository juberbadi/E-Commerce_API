import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { ApiParam, ApiTags, ApiBearerAuth, ApiUnauthorizedResponse, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('category')
@Controller('category')
export class CategoryController {

  constructor(private categoryService: CategoryService) {}

  @Get()
  @ApiResponse({ status:200, description: 'Ok' })
  getCategorys(): Promise<Category[]> {
    return this.categoryService.getCategorys();
  }

  @Get('/:id')
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  @ApiParam({ name: 'id' })
  getCategoryById(@Param('id') id: string): Promise<Category> {
    return this.categoryService.getCategoryById(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post()
  @ApiCreatedResponse({ description: 'Ok'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Patch('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  updateCategory(@Param('id') id:string, @Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.updateCategory(id, createCategoryDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Delete('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  deleteCategory(@Param('id') id:string): Promise<void> {
    return this.categoryService.deleteCategory(id);
  }

}
