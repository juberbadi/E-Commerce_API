import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrdersRepository } from './orders.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(OrdersRepository) private ordersRepository: OrdersRepository) {}

  getOrders(): Promise<Order[]> {
      return this.ordersRepository.getOrders();
  }

  async getOrderById(id: string): Promise<Order> {
    const found = await this.ordersRepository.findOne({ where: { id }});
    if(!found) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return found;
  }

  createOrder(createOrderDto: CreateOrderDto, user: User): Promise<Order> {
      return this.ordersRepository.createOrder(createOrderDto, user);
  }

  async updateOrder(id: string, createOrderDto: CreateOrderDto): Promise<Order> {
    const order = await this.getOrderById(id);

    order.quantity = createOrderDto.quantity;
    order.totalDiscount = createOrderDto.totalDiscount;
    order.totalAmount = createOrderDto.totalAmount;
    order.paymentMode = createOrderDto.paymentMode;
    order.product = createOrderDto.product;
    order.deliveryAddress = createOrderDto.deliveryAddress;

    await this.ordersRepository.save(order);
    return order;
  }

  async deleteOrder(id: string): Promise<void> {
    const result = await this.ordersRepository.delete({ id });
    console.log(result);
    if(result.affected === 0) {
      throw new NotFoundException(`Order with ID ${id} not found`)
    }
  }
}
