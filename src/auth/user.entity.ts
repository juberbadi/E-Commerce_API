import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserRole } from './user-role.enum';
import { Product } from '../products/product.entity';
import { DeliveryAddress } from '../delivery-address/delivery-address.entity';
import { Order } from '../orders/order.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    role: UserRole;

    @OneToMany((_type) => Product, (product) => product.user, { eager: true })
    product: Product[];

    @OneToMany((_type) => DeliveryAddress, (deliveryAddress) => deliveryAddress.user, { eager: true })
    deliveryAddress: DeliveryAddress[];

    @OneToMany((_type) => Order, (order) => order.user, { eager: true })
    order: Order[];
}
