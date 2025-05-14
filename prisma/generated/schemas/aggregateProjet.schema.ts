import { z } from 'zod';
import { ProjetOrderByWithRelationInputObjectSchema } from './objects/ProjetOrderByWithRelationInput.schema';
import { ProjetWhereInputObjectSchema } from './objects/ProjetWhereInput.schema';
import { ProjetWhereUniqueInputObjectSchema } from './objects/ProjetWhereUniqueInput.schema';
import { ProjetCountAggregateInputObjectSchema } from './objects/ProjetCountAggregateInput.schema';
import { ProjetMinAggregateInputObjectSchema } from './objects/ProjetMinAggregateInput.schema';
import { ProjetMaxAggregateInputObjectSchema } from './objects/ProjetMaxAggregateInput.schema';
import { ProjetAvgAggregateInputObjectSchema } from './objects/ProjetAvgAggregateInput.schema';
import { ProjetSumAggregateInputObjectSchema } from './objects/ProjetSumAggregateInput.schema';

export const ProjetAggregateSchema = z.object({
  orderBy: z
    .union([
      ProjetOrderByWithRelationInputObjectSchema,
      ProjetOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProjetWhereInputObjectSchema.optional(),
  cursor: ProjetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProjetCountAggregateInputObjectSchema])
    .optional(),
  _min: ProjetMinAggregateInputObjectSchema.optional(),
  _max: ProjetMaxAggregateInputObjectSchema.optional(),
  _avg: ProjetAvgAggregateInputObjectSchema.optional(),
  _sum: ProjetSumAggregateInputObjectSchema.optional(),
});
