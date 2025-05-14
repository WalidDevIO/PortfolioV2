import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    title: z.string(),
    content: z.string(),
    slug: z.string(),
    published: z.boolean(),
    description: z.string(),
  })
  .strict();

export const PostUncheckedCreateInputObjectSchema = Schema;
