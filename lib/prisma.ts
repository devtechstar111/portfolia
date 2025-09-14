import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null = null;

declare global {
  var prisma: PrismaClient | undefined;
}

// Only initialize Prisma if DATABASE_URL is available
if (process.env.DATABASE_URL) {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    // PrismaClient is attached to the `global` object in development to prevent
    // exhausting your database connection limit.
    //
    // Learn more:
    // https://pris.ly/d/help/next-js-best-practices
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

export default prisma;
