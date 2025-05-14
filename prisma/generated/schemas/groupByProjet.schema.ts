import { z } from 'zod';
import { ProjetWhereInputObjectSchema } from './objects/ProjetWhereInput.schema';
import { ProjetOrderByWithAggregationInputObjectSchema } from './objects/ProjetOrderByWithAggregationInput.schema';
import { ProjetScalarWhereWithAggregatesInputObjectSchema } from './objects/ProjetScalarWhereWithAggregatesInput.schema';
import { ProjetScalarFieldEnumSchema } from './enums/ProjetScalarFieldEnum.schema';

export const ProjetGroupBySchema = z.object({
  where: ProjetWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProjetOrderByWithAggregationInputObjectSchema,
      ProjetOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProjetScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProjetScalarFieldEnumSchema),
});
