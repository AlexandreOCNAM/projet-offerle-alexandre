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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findByName(name: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }[]>;
    findByRating(rating: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCarDto: UpdateCarDto): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__LegoCarClient<{
        id: number;
        name: string;
        description: string;
        rating: number;
        price: number;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
