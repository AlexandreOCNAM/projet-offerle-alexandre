// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const article1 = await prisma.article.create({
    data: {
      title: "Article 1",
      description: "Creation random",
      price: 2,
    }
  })

  const article2 = await prisma.article.create({
    data: {
      title: "Article 2",
      description: "Creation random",
      price: 2,
    }
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })