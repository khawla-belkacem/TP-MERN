import { AdressService } from './models/services/AdressService';
import { AdressRpository } from './models/repositories/AdressRepository';
import { AddressController } from './models/Controller/AdressControler';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfig } from './config/config';
import { Entities } from './models/entities';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...MysqlConfig,
      entities: Entities,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController , AddressController],
  providers: [AppService, AdressRpository , AdressService],
})
export class AppModule {}
