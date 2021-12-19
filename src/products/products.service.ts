import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from '../category/category.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(ProductsRepository) private productsRepository: ProductsRepository) {}

  getProducts(): Promise<Product[]> {
      return this.productsRepository.getProducts();
  }

  async getProductById(id: string): Promise<Product> {
    const found = await this.productsRepository.findOne({ where: { id }});
    if(!found) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return found;
  }

  createProduct (createProductDto: CreateProductDto, user: User): Promise<Product> {
      return this.productsRepository.createProduct(createProductDto, user);
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.getProductById(id);

    product.title = updateProductDto.title;
    product.price = updateProductDto.price;
    product.discount = updateProductDto.discount;
    product.priceWithDiscount = updateProductDto.priceWithDiscount;
    product.description = updateProductDto.description;
    product.category = updateProductDto.category;

    // const product = {
    //   title: createProductDto.title,
    //   price: createProductDto.price,
    //   discount: createProductDto.discount,
    //   priceWithDiscount: createProductDto.priceWithDiscount,
    //   description: createProductDto.description
    // }

    await this.productsRepository.save(product);
    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await this.productsRepository.delete({ id });
    console.log(result);
    if(result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`)
    }
  }

}
