import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FormationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FormationWhereInputObjectSchema),
        z.lazy(() => FormationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FormationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FormationWhereInputObjectSchema),
        z.lazy(() => FormationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    duration: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    location: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    technologies: z.lazy(() => JsonFilterObjectSchema).optional(),
    extraLinks: z.lazy(() => JsonFilterObjectSchema).optional(),
    speciality: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    landingDescription: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const FormationWhereInputObjectSchema = Schema;
