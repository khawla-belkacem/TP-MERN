import { Body, Controller, Get, Post } from '@nestjs/common';
import { Address } from '../entities/Address';

import { AdressService } from '../services/AdressService';

@Controller('address')
export class AddressController {
  constructor(private addressService: AdressService) {}

  @Post()
  async createAddress(@Body() address: Address): Promise<Address> {
    try {
      return await this.addressService.createAdress(address);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async getAllAddresses(): Promise<Address[]> {
    try {
      return await this.addressService.getAllAdress();
    } catch (error) {
      throw error;
    }
  }
}
