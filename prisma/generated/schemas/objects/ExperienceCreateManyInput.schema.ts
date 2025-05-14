import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.ExperienceCreateManyInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    duration: z.string(),
    location: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    extraLinks: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    type: z.string(),
    landingDescription: z.string(),
  })
  .strict();

export const ExperienceCreateManyInputObjectSchema = Schema;
