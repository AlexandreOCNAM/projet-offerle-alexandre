"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const user = await prisma.user.create({
        data: {
            username: "emma",
            email: "emma@cfai.com",
            password: await (0, bcrypt_1.hash)("toto", 10),
        }
    });
    const renault = await prisma.brand.create({
        data: {
            name: "Renault"
        }
    });
    const peugeot = await prisma.brand.create({
        data: {
            name: "Peugeot"
        }
    });
    const citroen = await prisma.brand.create({
        data: {
            name: "Citroen"
        }
    });
    const clio = await prisma.car.create({
        data: {
            name: "Clio",
            brandId: renault.id,
            price: 20000,
            release: new Date("2020-01-01")
        }
    });
    const meganne = await prisma.car.create({
        data: {
            name: "Meganne",
            brandId: renault.id,
            price: 25000,
            release: new Date("2020-01-01")
        }
    });
    const meganne_rs = await prisma.car.create({
        data: {
            name: "Meganne 4 RS",
            brandId: renault.id,
            price: 30000,
            release: new Date("2020-01-01")
        }
    });
    const twingo = await prisma.car.create({
        data: {
            name: "Twingo",
            brandId: renault.id,
            price: 15000,
            release: new Date("2020-01-01")
        }
    });
    const twingo_rs = await prisma.car.create({
        data: {
            name: "Twingo RS",
            brandId: renault.id,
            price: 20000,
            release: new Date("2020-01-01")
        }
    });
    const clio_rs = await prisma.car.create({
        data: {
            name: "Clio 3 RS",
            brandId: renault.id,
            price: 25000,
            release: new Date("2020-01-01")
        }
    });
    const peugeot_208 = await prisma.car.create({
        data: {
            name: "208",
            brandId: peugeot.id,
            price: 20000,
            release: new Date("2020-01-01")
        }
    });
    const peugeot_308 = await prisma.car.create({
        data: {
            name: "308",
            brandId: peugeot.id,
            price: 25000,
            release: new Date("2020-01-01")
        }
    });
    const peugeot_508 = await prisma.car.create({
        data: {
            name: "508",
            brandId: peugeot.id,
            price: 30000,
            release: new Date("2020-01-01")
        }
    });
    const peugeot_208_gti = await prisma.car.create({
        data: {
            name: "208 GTI",
            brandId: peugeot.id,
            price: 25000,
            release: new Date("2020-01-01")
        }
    });
    const peugeot_308_gti = await prisma.car.create({
        data: {
            name: "308 GTI",
            brandId: peugeot.id,
            price: 30000,
            release: new Date("2020-01-01")
        }
    });
    const peugeot_508_pse = await prisma.car.create({
        data: {
            name: "508 PSE",
            brandId: peugeot.id,
            price: 35000,
            release: new Date("2023-01-01")
        }
    });
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map