"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const express_rate_limit_1 = require("express-rate-limit");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept, Authorization',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.use((0, helmet_1.default)());
    app.use((0, express_rate_limit_1.default)({
        windowMs: 10 * 60 * 1000,
        max: 100,
        standardHeaders: true,
        legacyHeaders: false,
        skipSuccessfulRequests: false,
        message: { message: 'Too many requests', statusCode: 403 },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Median')
        .setDescription('The Median API description')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map