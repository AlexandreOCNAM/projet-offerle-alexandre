import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(dto: CreateUserDto): void;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
