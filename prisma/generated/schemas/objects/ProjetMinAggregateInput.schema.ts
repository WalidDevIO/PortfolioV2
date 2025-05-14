import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjetMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    title: z.literal(true).optional(),
    duration: z.literal(true).optional(),
    location: z.literal(true).optional(),
    description: z.literal(true).optional(),
    image: z.literal(true).optional(),
    littleDescription: z.literal(true).optional(),
    landingDescription: z.literal(true).optional(),
  })
  .strict();

export const ProjetMinAggregateInputObjectSchema = Schema;
