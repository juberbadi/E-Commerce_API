import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { ApiParam, ApiTags, ApiBearerAuth, ApiUnauthorizedResponse, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Category } from '../category/category.entity';
import { GetCategory } from '../category/get-category.decorator';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from '../auth/user.entity';

@ApiBearerAuth()
@ApiTags('orders')
@Controller('orders')
@UseGuards(AuthGuard())
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Get('/:id')
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  @ApiParam({ name: 'id' })
  getOrderById(@Param('id') id: string): Promise<Order> {
    return this.ordersService.getOrderById(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Ok'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  createOrder(@Body() createOrderDto: CreateOrderDto, @GetUser() user: User): Promise<Order> {
    return this.ordersService.createOrder(createOrderDto, user);
  }

  @Patch('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: 'Not found(message: Product with this id not found)' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  @ApiParam({ name: 'id' })
  updateOrder(@Param('id') id:string, @Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.updateOrder(id, createOrderDto);
  }

  @Delete('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: 'Not found(message: Product with this id not found)' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  deleteOrder(@Param('id') id:string): Promise<void> {
    return this.ordersService.deleteOrder(id);
  }
}
