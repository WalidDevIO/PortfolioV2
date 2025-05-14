import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConfigurationMinAggregateInputType> = z
  .object({
    mail: z.literal(true).optional(),
    location: z.literal(true).optional(),
    github: z.literal(true).optional(),
    linkedin: z.literal(true).optional(),
    landingText: z.literal(true).optional(),
  })
  .strict();

export const ConfigurationMinAggregateInputObjectSchema = Schema;
