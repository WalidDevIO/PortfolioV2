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

const Schema: z.ZodType<Prisma.ProjetUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    title: z.string(),
    duration: z.string(),
    location: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    extraLinks: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    littleDescription: z.string(),
    landingDescription: z.string(),
  })
  .strict();

export const ProjetUncheckedCreateInputObjectSchema = Schema;
