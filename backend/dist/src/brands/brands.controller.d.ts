import { BrandsService } from './brands.service';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        logo: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__BrandClient<{
        id: number;
        name: string;
        logo: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
