import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsService {

  constructor(private prisma: PrismaService) { }

  create(createCarDto: CreateCarDto) {
    return this.prisma.legoCar.create({
      data: createCarDto
    });
  }

  findAll() {
    return this.prisma.legoCar.findMany();
  }

  findOne(id: number) {
    return this.prisma.legoCar.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.prisma.legoCar.update({
      where: {
        id: id
      },
      data: updateCarDto
    });
  }

  remove(id: number) {
    return this.prisma.legoCar.delete({
      where: {
        id: id
      }
    });
  }
}
