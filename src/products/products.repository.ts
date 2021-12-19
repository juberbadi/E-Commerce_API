import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '../category/category.entity';
import { User } from '../auth/user.entity';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {

  async getProducts(): Promise<Product[]> {
    const query = this.createQueryBuilder('product');
    const products = await query.getMany();
    return products;
  }

  async createProduct(createProductDto: CreateProductDto, user: User): Promise<Product> {
    const { title, price, discount, priceWithDiscount, description, category } = createProductDto;
    const product = this.create({
      title, price, discount, priceWithDiscount, description, category, user
    })
    await this.save(product);
    return product;
  }

}
