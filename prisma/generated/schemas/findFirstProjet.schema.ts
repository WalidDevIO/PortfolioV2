import { z } from 'zod';
import { ProjetOrderByWithRelationInputObjectSchema } from './objects/ProjetOrderByWithRelationInput.schema';
import { ProjetWhereInputObjectSchema } from './objects/ProjetWhereInput.schema';
import { ProjetWhereUniqueInputObjectSchema } from './objects/ProjetWhereUniqueInput.schema';
import { ProjetScalarFieldEnumSchema } from './enums/ProjetScalarFieldEnum.schema';

export const ProjetFindFirstSchema = z.object({
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
  distinct: z.array(ProjetScalarFieldEnumSchema).optional(),
});
