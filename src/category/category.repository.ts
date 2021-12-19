import { EntityRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

  async getCategorys(): Promise<Category[]> {
    const query = this.createQueryBuilder('category');
    const category = await query.getMany();
    return category;
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { categoryname } = createCategoryDto;
    const category = this.create({ categoryname })
    await this.save(category);
    return category;
  }
}
