import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    description: z.string(),
    level: z.number(),
  })
  .strict();

export const SkillCreateInputObjectSchema = Schema;
