import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ConfigurationCountOrderByAggregateInputObjectSchema } from './ConfigurationCountOrderByAggregateInput.schema';
import { ConfigurationMaxOrderByAggregateInputObjectSchema } from './ConfigurationMaxOrderByAggregateInput.schema';
import { ConfigurationMinOrderByAggregateInputObjectSchema } from './ConfigurationMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConfigurationOrderByWithAggregationInput> = z
  .object({
    mail: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    github: z.lazy(() => SortOrderSchema).optional(),
    linkedin: z.lazy(() => SortOrderSchema).optional(),
    landingText: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ConfigurationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ConfigurationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ConfigurationMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ConfigurationOrderByWithAggregationInputObjectSchema = Schema;
