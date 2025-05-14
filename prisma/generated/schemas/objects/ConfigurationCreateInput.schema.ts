import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConfigurationCreateInput> = z
  .object({
    mail: z.string(),
    location: z.string(),
    github: z.string(),
    linkedin: z.string(),
    landingText: z.string(),
  })
  .strict();

export const ConfigurationCreateInputObjectSchema = Schema;
