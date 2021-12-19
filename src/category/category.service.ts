import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from './category.repository'
@Injectable()
export class CategoryService {

  constructor(@InjectRepository(CategoryRepository) private categoryRepository: CategoryRepository) {}

  getCategorys(): Promise<Category[]> {
      return this.categoryRepository.getCategorys();
  }

  async getCategoryById(id: string): Promise<Category> {
    const found = await this.categoryRepository.findOne({ where: { id }});
    if(!found) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return found;
  }

  createCategory (createCategoryDto: CreateCategoryDto): Promise<Category> {
      return this.categoryRepository.createCategory(createCategoryDto);
  }

  async updateCategory(id: string, createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.getCategoryById(id);
    category.categoryname = createCategoryDto.categoryname;
    await this.categoryRepository.save(category);
    return category;
  }

  async deleteCategory(id: string): Promise<void> {
    const result = await this.categoryRepository.delete({ id });
    console.log(result);
    if(result.affected === 0) {
      throw new NotFoundException(`Category with ID ${id} not found`)
    }
  }


}
