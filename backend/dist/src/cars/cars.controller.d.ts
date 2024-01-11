import { Logger } from '@nestjs/common';
import { CarsService } from './cars.service';
import { SearchCarDto } from './dto/search-dto.dto';
export declare class CarsController {
    private readonly carsService;
    private logger;
    constructor(carsService: CarsService, logger?: Logger);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }[]>;
    search(searchCarDto: SearchCarDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
