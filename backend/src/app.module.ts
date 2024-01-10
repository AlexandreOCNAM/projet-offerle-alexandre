import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { SwaggerModule } from '@nestjs/swagger';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    PrismaModule,
    SwaggerModule,
    CarsModule,
    BrandsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaModule, CarsService],
})
export class AppModule {}
