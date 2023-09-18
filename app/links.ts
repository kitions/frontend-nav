import prisma from '@/lib/db';
import type { Prisma } from '@prisma/client';

export default async function getNavLinks() {

  const res = await prisma.category.findMany({
    orderBy: [
      {
        rank: 'asc',
      }
    ],
    include: {
      links: {
        orderBy: {
          rank: 'asc',
        },
        where: {
          public: true,
          status: 1,
        },
      },
    },
  });
  return res;
}

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
type UsersWithPosts = ThenArg<ReturnType<typeof getNavLinks>>

export type CategoryWithLinks = UsersWithPosts
// export type CategoryWithLinks = Prisma.PromiseReturnType<typeof getNavLinks>
