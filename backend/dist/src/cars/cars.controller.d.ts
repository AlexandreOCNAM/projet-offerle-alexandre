import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
