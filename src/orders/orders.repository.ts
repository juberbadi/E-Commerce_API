import { EntityRepository, Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from '../auth/user.entity';

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {

  async getOrders(): Promise<Order[]> {
    const query = this.createQueryBuilder('order');
    const orders = await query.getMany();
    return orders;
  }

  async createOrder(createOrderDto: CreateOrderDto, user: User): Promise<Order> {
    const { quantity, totalDiscount, totalAmount, paymentMode, product, deliveryAddress } = createOrderDto;
    const order = this.create({
      quantity, totalDiscount, totalAmount, paymentMode, product, deliveryAddress, user
    })
    await this.save(order);
    return order;
  }

}
