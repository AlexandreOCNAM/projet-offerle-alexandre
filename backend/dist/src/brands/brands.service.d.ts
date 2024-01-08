import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BrandsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBrandDto: CreateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<{
        id: number;
        name: string;
        logo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        logo: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__BrandClient<{
        id: number;
        name: string;
        logo: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateBrandDto: UpdateBrandDto): import(".prisma/client").Prisma.Prisma__BrandClient<{
        id: number;
        name: string;
        logo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BrandClient<{
        id: number;
        name: string;
        logo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
