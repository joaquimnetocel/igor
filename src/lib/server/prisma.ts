import { PrismaClient } from '@prisma/client';
// OU: import { PrismaClient } from '@prisma/client/edge'

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma;
}

export { prisma };
