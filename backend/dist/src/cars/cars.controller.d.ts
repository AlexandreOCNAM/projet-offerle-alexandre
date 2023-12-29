import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    create(createCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CarClient<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateCarDto: UpdateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarClient<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
