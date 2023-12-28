import { LoginDto } from './dot/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        user: {
            id: number;
            email: string;
            username: string;
            createdAt: Date;
            updatedAt: Date;
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    validateUser(dto: LoginDto): Promise<{
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
