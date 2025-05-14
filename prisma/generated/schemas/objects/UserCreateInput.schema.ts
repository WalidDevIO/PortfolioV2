import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    email: z.string(),
    password: z.string(),
    role: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
