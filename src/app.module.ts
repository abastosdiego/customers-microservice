import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeORMConfigService } from './config/typeorm.config.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    CustomerModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfigService,
      inject: [TypeORMConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}