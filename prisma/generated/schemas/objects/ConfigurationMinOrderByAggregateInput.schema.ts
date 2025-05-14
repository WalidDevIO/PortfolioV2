import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConfigurationMinOrderByAggregateInput> = z
  .object({
    mail: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    github: z.lazy(() => SortOrderSchema).optional(),
    linkedin: z.lazy(() => SortOrderSchema).optional(),
    landingText: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ConfigurationMinOrderByAggregateInputObjectSchema = Schema;
