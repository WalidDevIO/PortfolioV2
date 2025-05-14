import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    description: z.string(),
    level: z.number(),
  })
  .strict();

export const SkillUncheckedCreateInputObjectSchema = Schema;
