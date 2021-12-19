import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryAddress } from './delivery-address.entity';
import { CreateDeliveryAddressDto } from './dto/create-address.dto';
import { DeliveryAddressRepository } from './delivery-address.repositry';
import { User } from '../auth/user.entity';

@Injectable()
export class DeliveryAddressService {
  constructor(@InjectRepository(DeliveryAddressRepository) private deliveryAddressRepository: DeliveryAddressRepository) {}

  getDeliveryAddress(): Promise<DeliveryAddress[]> {
      return this.deliveryAddressRepository.getDeliveryAddress();
  }

  async getDeliveryAddressById(id: string): Promise<DeliveryAddress> {
    const found = await this.deliveryAddressRepository.findOne({ where: { id }});
    if(!found) {
      throw new NotFoundException(`DeliveryAddress with ID ${id} not found`);
    }
    return found;
  }

  createDeliveryAddress(createDeliveryAddressDto: CreateDeliveryAddressDto, user: User): Promise<DeliveryAddress> {
      return this.deliveryAddressRepository.createDeliveryAddress(createDeliveryAddressDto, user);
  }

  async updateDeliveryAddress(id: string, createDeliveryAddressDto: CreateDeliveryAddressDto): Promise<DeliveryAddress> {
    const deliveryAddress = await this.getDeliveryAddressById(id);

    deliveryAddress.fullname = createDeliveryAddressDto.fullname;
    deliveryAddress.phoneno = createDeliveryAddressDto.phoneno;
    deliveryAddress.address = createDeliveryAddressDto.address;
    deliveryAddress.city = createDeliveryAddressDto.city;
    deliveryAddress.district = createDeliveryAddressDto.district;
    deliveryAddress.state = createDeliveryAddressDto.state;
    deliveryAddress.pincode = createDeliveryAddressDto.pincode;

    await this.deliveryAddressRepository.save(deliveryAddress);
    return deliveryAddress;
  }

  async deleteDeliveryAddress(id: string): Promise<void> {
    const result = await this.deliveryAddressRepository.delete({ id });
    console.log(result);
    if(result.affected === 0) {
      throw new NotFoundException(`DeliveryAddress with ID ${id} not found`)
    }
  }

}
