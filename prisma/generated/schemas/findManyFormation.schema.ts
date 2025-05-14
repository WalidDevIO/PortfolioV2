import { z } from 'zod';
import { FormationOrderByWithRelationInputObjectSchema } from './objects/FormationOrderByWithRelationInput.schema';
import { FormationWhereInputObjectSchema } from './objects/FormationWhereInput.schema';
import { FormationWhereUniqueInputObjectSchema } from './objects/FormationWhereUniqueInput.schema';
import { FormationScalarFieldEnumSchema } from './enums/FormationScalarFieldEnum.schema';

export const FormationFindManySchema = z.object({
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
  distinct: z.array(FormationScalarFieldEnumSchema).optional(),
});
