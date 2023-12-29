import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CarsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CarClient<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCarDto: UpdateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarClient<{
        id: number;
        name: string;
        price: number;
        brandId: number;
        release: Date;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
