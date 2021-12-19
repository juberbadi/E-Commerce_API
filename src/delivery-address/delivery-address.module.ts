import { Module } from '@nestjs/common';
import { DeliveryAddressService } from './delivery-address.service';
import { DeliveryAddressController } from './delivery-address.controller';
import { DeliveryAddressRepository } from './delivery-address.repositry';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryAddressRepository]), AuthModule],
  providers: [DeliveryAddressService],
  controllers: [DeliveryAddressController]
})
export class DeliveryAddressModule {}
