import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../auth/user.entity';
import { Exclude } from 'class-transformer';
import { Product } from '../products/product.entity';
import { DeliveryAddress } from '../delivery-address/delivery-address.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  quantity: number;

  @Column()
  totalDiscount: number;

  @Column()
  totalAmount: number;

  @Column()
  paymentMode: string;

  @ManyToOne((_type) => User, (user) => user.order, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;

  @ManyToOne((_type) => Product, (product) => product.order, { eager: false })
  @Exclude({ toPlainOnly: true })
  product: number;

  @ManyToOne((_type) => DeliveryAddress, (deliveryAddress) => deliveryAddress.order, { eager: false })
  @Exclude({ toPlainOnly: true })
  deliveryAddress: number;
}
