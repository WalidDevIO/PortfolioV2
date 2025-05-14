import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjetCountOrderByAggregateInputObjectSchema } from './ProjetCountOrderByAggregateInput.schema';
import { ProjetAvgOrderByAggregateInputObjectSchema } from './ProjetAvgOrderByAggregateInput.schema';
import { ProjetMaxOrderByAggregateInputObjectSchema } from './ProjetMaxOrderByAggregateInput.schema';
import { ProjetMinOrderByAggregateInputObjectSchema } from './ProjetMinOrderByAggregateInput.schema';
import { ProjetSumOrderByAggregateInputObjectSchema } from './ProjetSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjetOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    technologies: z.lazy(() => SortOrderSchema).optional(),
    extraLinks: z.lazy(() => SortOrderSchema).optional(),
    littleDescription: z.lazy(() => SortOrderSchema).optional(),
    landingDescription: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjetCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ProjetAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProjetMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProjetMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ProjetSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProjetOrderByWithAggregationInputObjectSchema = Schema;
