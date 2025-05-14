import { z } from 'zod';
import { FormationWhereInputObjectSchema } from './objects/FormationWhereInput.schema';
import { FormationOrderByWithAggregationInputObjectSchema } from './objects/FormationOrderByWithAggregationInput.schema';
import { FormationScalarWhereWithAggregatesInputObjectSchema } from './objects/FormationScalarWhereWithAggregatesInput.schema';
import { FormationScalarFieldEnumSchema } from './enums/FormationScalarFieldEnum.schema';

export const FormationGroupBySchema = z.object({
  where: FormationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FormationOrderByWithAggregationInputObjectSchema,
      FormationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FormationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FormationScalarFieldEnumSchema),
});
