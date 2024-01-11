// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'a@e.com',
      username: 'a',
      password: await hash('123456', 10),
    },
  });
  await prisma.user.create({
    data: {
      email: 'emma.toto@cfai.com',
      username: 'emma',
      password: await hash('toto', 10),
    },
  });
  await prisma.user.create({
    data: {
      email: 'a@example.com',
      username: 'alex',
      password: await hash('123456', 10),
    },
  });

  const bmw_m4 = await prisma.legoCar.createMany({
    data: [
      {
        name: 'BMW M4 GT3 et BMW M Hybrid V8',
        description: 'Voiture de course BMW M4 GT3 et BMW M Hybrid V8',
        price: 49.99,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blt453abebeefd0e0ce/76922.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: '1970 Dodge Charger R/T',
        description: 'Fast & Furious 1970 Dodge Charger R/T',
        price: 24.99,
        rating: 4.7,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blt2d9c5e59dbb06c71/76912.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Ferrari 512 M',
        description: '1970 Ferrari 512 M',
        price: 24.99,
        rating: 4.8,
        image:
          'https://www.lego.com/cdn/cs/set/assets/bltd140eeeac63cb114/76906.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Ferrari 812 Competizione',
        description: 'Ferrari 812 Competizione',
        price: 24.99,
        rating: 4.9,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blt4d8e5ab570296ac1/76914.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Ford Mustang Dark Horse',
        description: 'La voiture de sport Ford Mustang Dark Horse',
        price: 26.99,
        image:
          'https://www.lego.com/cdn/cs/set/assets/bltbcc306ec64d4e9f0/76920.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Koenigsegg Jesko',
        description: 'Koenigsegg Jesko',
        price: 24.99,
        rating: 4.5,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blta557df635846a17f/76900.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Lamborghini Countach',
        description: 'Lamborghini Countach',
        price: 24.99,
        rating: 4.6,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blta557df635846a17f/76900.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Lotus Evija',
        description: 'Lotus Evija',
        price: 24.99,
        rating: 4.8,
        image:
          'https://www.lego.com/cdn/cs/set/assets/bltc5ffb30fa56b54ad/76907.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'McLaren Solus GT et McLaren F1 LM',
        description: 'McLaren Solus GT et McLaren F1 LM',
        price: 44.99,
        rating: 4,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blt449436c4784eb79b/76918.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Mercedes-AMG F1 W12 E Performance et Mercedes-AMG Project One',
        description:
          'Mercedes-AMG F1 W12 E Performance et Mercedes-AMG Project One',
        price: 44.99,
        rating: 4.3,
        image:
          'https://www.lego.com/cdn/cs/set/assets/bltf3a268cfa1d99a84/76909.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Nissan Skyline GT-R (R34)',
        description: 'Nissan Skyline GT-R (R34) 2 Fast 2 Furious',
        price: 24.99,
        rating: 4.7,
        image:
          'https://www.lego.com/cdn/cs/set/assets/bltc77f25b5ccb98142/76917.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Pagani Utopia',
        description: 'Pagani Utopia',
        price: 24.99,
        rating: 4.8,
        image:
          'https://www.lego.com/cdn/cs/set/assets/bltd8b5f3b472a62a3d/76915.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Porsche 963',
        description: 'Porsche 963',
        price: 24.99,
        rating: 4.7,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blt6cc4b8e0f29a4e0f/76916.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
      {
        name: 'Toyota GR Supra',
        description: 'Toyota GR Supra',
        price: 24.99,
        rating: 4.4,
        image:
          'https://www.lego.com/cdn/cs/set/assets/blt5cab330944de71a9/76901.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
