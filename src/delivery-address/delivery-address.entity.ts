import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../auth/user.entity';
import { Exclude } from 'class-transformer';
import { Order } from '../orders/order.entity';
@Entity()
export class DeliveryAddress {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  fullname: string;

  @Column()
  phoneno: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column()
  pincode: string;

  @ManyToOne((_type) => User, (user) => user.deliveryAddress, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;

  @OneToMany((_type) => Order, (order) => order.deliveryAddress, { eager: true })
  order: Order[];
}
