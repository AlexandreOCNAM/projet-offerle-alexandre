"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const article1 = await prisma.article.create({
        data: {
            title: "Article 1",
            description: "Creation random",
            price: 2,
        }
    });
    const article2 = await prisma.article.create({
        data: {
            title: "Article 2",
            description: "Creation random",
            price: 2,
        }
    });
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map