import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CarsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findByName(name: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }[]>;
    findByRating(rating: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCarDto: UpdateCarDto): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
        brandId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
