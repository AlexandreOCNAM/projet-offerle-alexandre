import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Logger } from '@nestjs/common';
import { CarsService } from './cars.service';
import { SearchCarDto } from './dto/search-dto.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService,
    private logger: Logger = new Logger('log'),
  ) {}

  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get('search')
  search(@Query() searchCarDto: SearchCarDto) {
    this.logger.log(searchCarDto);
    return this.carsService.findByName(searchCarDto.name);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }
}
