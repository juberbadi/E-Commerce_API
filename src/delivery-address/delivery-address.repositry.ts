import { EntityRepository, Repository } from 'typeorm';
import { DeliveryAddress } from './delivery-address.entity';
import { CreateDeliveryAddressDto } from './dto/create-address.dto';
import { User } from '../auth/user.entity';

@EntityRepository(DeliveryAddress)
export class DeliveryAddressRepository extends Repository<DeliveryAddress> {

  async getDeliveryAddress(): Promise<DeliveryAddress[]> {
    const query = this.createQueryBuilder('deliveryAddress');
    const deliveryAddress = await query.getMany();
    return deliveryAddress;
  }

  async createDeliveryAddress(createDeliveryAddressDto: CreateDeliveryAddressDto, user: User): Promise<DeliveryAddress> {
    const { fullname, phoneno, address, city, district, state, pincode } = createDeliveryAddressDto;
    const deliveryAddress = this.create({
      fullname, phoneno, address, city, district, state, pincode, user
    })
    await this.save(deliveryAddress);
    return deliveryAddress;
  }

}
