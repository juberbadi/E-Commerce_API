import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Category } from '../category/category.entity';
import { User } from '../auth/user.entity';
import { Exclude } from 'class-transformer';
import { Order } from '../orders/order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column()
  priceWithDiscount: number;

  @Column()
  description: string;

  @ManyToOne((_type) => Category, (category) => category.products, { eager: false })
  @Exclude({ toPlainOnly: true })
  category: string;

  @ManyToOne((_type) => User, (user) => user.product, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;

  @OneToMany((_type) => Order, (order) => order.product, { eager: true })
  order: Order[];

}
