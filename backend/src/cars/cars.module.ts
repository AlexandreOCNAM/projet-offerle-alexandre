import { Logger, Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CarsController],
  providers: [CarsService, PrismaService, JwtService, Logger],
})
export class CarsModule {}
