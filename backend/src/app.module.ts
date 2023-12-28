import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, PrismaModule, SwaggerModule],
  controllers: [AppController],
  providers: [AppService, PrismaModule],
})
export class AppModule {}
