import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(({ log: ['query'] }));

const main = async () => {
  await prisma.user.create({
    data: {
      id: "6f0e4c61-3a80-4e10-88c6-e0e623c7c373",
      email: "user@email.com",
      name: "pokemon"
    },
  });
};

main()
