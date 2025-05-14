import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConfigurationWhereUniqueInput> = z
  .object({
    mail: z.string().optional(),
  })
  .strict();

export const ConfigurationWhereUniqueInputObjectSchema = Schema;
