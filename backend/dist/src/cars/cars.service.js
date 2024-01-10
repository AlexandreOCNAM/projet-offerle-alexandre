"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarsService = class CarsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCarDto) {
        return this.prisma.legoCar.create({
            data: createCarDto,
        });
    }
    findByName(name) {
        common_1.Logger.warn(name);
        return this.prisma.legoCar.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        });
    }
    findByRating(rating) {
        return this.prisma.legoCar.findMany({
            where: {
                rating: rating,
            },
        });
    }
    findAll() {
        return this.prisma.legoCar.findMany();
    }
    findOne(id) {
        return this.prisma.legoCar.findUnique({
            where: {
                id: id,
            },
        });
    }
    update(id, updateCarDto) {
        return this.prisma.legoCar.update({
            where: {
                id: id,
            },
            data: updateCarDto,
        });
    }
    remove(id) {
        return this.prisma.legoCar.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarsService);
//# sourceMappingURL=cars.service.js.map