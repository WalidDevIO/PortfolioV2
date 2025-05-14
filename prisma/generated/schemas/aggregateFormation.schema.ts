import { z } from 'zod';
import { FormationOrderByWithRelationInputObjectSchema } from './objects/FormationOrderByWithRelationInput.schema';
import { FormationWhereInputObjectSchema } from './objects/FormationWhereInput.schema';
import { FormationWhereUniqueInputObjectSchema } from './objects/FormationWhereUniqueInput.schema';
import { FormationCountAggregateInputObjectSchema } from './objects/FormationCountAggregateInput.schema';
import { FormationMinAggregateInputObjectSchema } from './objects/FormationMinAggregateInput.schema';
import { FormationMaxAggregateInputObjectSchema } from './objects/FormationMaxAggregateInput.schema';
import { FormationAvgAggregateInputObjectSchema } from './objects/FormationAvgAggregateInput.schema';
import { FormationSumAggregateInputObjectSchema } from './objects/FormationSumAggregateInput.schema';

export const FormationAggregateSchema = z.object({
  orderBy: z
    .union([
      FormationOrderByWithRelationInputObjectSchema,
      FormationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FormationWhereInputObjectSchema.optional(),
  cursor: FormationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FormationCountAggregateInputObjectSchema])
    .optional(),
  _min: FormationMinAggregateInputObjectSchema.optional(),
  _max: FormationMaxAggregateInputObjectSchema.optional(),
  _avg: FormationAvgAggregateInputObjectSchema.optional(),
  _sum: FormationSumAggregateInputObjectSchema.optional(),
});
