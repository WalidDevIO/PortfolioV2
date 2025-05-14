import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FormationCountOrderByAggregateInputObjectSchema } from './FormationCountOrderByAggregateInput.schema';
import { FormationAvgOrderByAggregateInputObjectSchema } from './FormationAvgOrderByAggregateInput.schema';
import { FormationMaxOrderByAggregateInputObjectSchema } from './FormationMaxOrderByAggregateInput.schema';
import { FormationMinOrderByAggregateInputObjectSchema } from './FormationMinOrderByAggregateInput.schema';
import { FormationSumOrderByAggregateInputObjectSchema } from './FormationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FormationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    technologies: z.lazy(() => SortOrderSchema).optional(),
    extraLinks: z.lazy(() => SortOrderSchema).optional(),
    speciality: z.lazy(() => SortOrderSchema).optional(),
    landingDescription: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FormationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => FormationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => FormationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => FormationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => FormationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FormationOrderByWithAggregationInputObjectSchema = Schema;
