import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { DeliveryAddressService } from './delivery-address.service';
import { CreateDeliveryAddressDto } from './dto/create-address.dto';
import { DeliveryAddress } from './delivery-address.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from '../auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiTags, ApiBearerAuth, ApiUnauthorizedResponse, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('delivery-address')
@Controller('delivery-address')
@UseGuards(AuthGuard())
export class DeliveryAddressController {
  constructor(private deliveryAddressService: DeliveryAddressService) {}

  @Get()
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  getDeliveryAddress(): Promise<DeliveryAddress[]> {
    return this.deliveryAddressService.getDeliveryAddress();
  }

  @Get('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  getDeliveryAddressById(@Param('id') id: string): Promise<DeliveryAddress> {
    return this.deliveryAddressService.getDeliveryAddressById(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Ok'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  createDeliveryAddress(@Body() createDeliveryAddressDto: CreateDeliveryAddressDto, @GetUser() user: User): Promise<DeliveryAddress> {
    return this.deliveryAddressService.createDeliveryAddress(createDeliveryAddressDto, user);
  }

  @Patch('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: `Not found(message: Product with this id not found)` })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  updateDeliveryAddress(@Param('id') id:string, @Body() createDeliveryAddressDto: CreateDeliveryAddressDto, ): Promise<DeliveryAddress> {
    return this.deliveryAddressService.updateDeliveryAddress(id, createDeliveryAddressDto);
  }

  @Delete('/:id')
  @ApiParam({ name: 'id' })
  @ApiResponse({ status:200, description: 'Ok' })
  @ApiResponse({ status:404, description: 'Not found(message: Product with this id not found)' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  deleteDeliveryAddress(@Param('id') id:string): Promise<void> {
    return this.deliveryAddressService.deleteDeliveryAddress(id);
  }
}
