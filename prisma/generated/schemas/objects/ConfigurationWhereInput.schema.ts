import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConfigurationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConfigurationWhereInputObjectSchema),
        z.lazy(() => ConfigurationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConfigurationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConfigurationWhereInputObjectSchema),
        z.lazy(() => ConfigurationWhereInputObjectSchema).array(),
      ])
      .optional(),
    mail: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    location: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    github: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    linkedin: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    landingText: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ConfigurationWhereInputObjectSchema = Schema;
