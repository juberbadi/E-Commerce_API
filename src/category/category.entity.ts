import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity'
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  categoryname: string;

  @OneToMany((_type) => Product, (product) => product.category, { eager: true })
  products: Product[];
}
