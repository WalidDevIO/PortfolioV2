import { z } from 'zod';
import { SkillOrderByWithRelationInputObjectSchema } from './objects/SkillOrderByWithRelationInput.schema';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';
import { SkillScalarFieldEnumSchema } from './enums/SkillScalarFieldEnum.schema';

export const SkillFindFirstSchema = z.object({
  orderBy: z
    .union([
      SkillOrderByWithRelationInputObjectSchema,
      SkillOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SkillWhereInputObjectSchema.optional(),
  cursor: SkillWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SkillScalarFieldEnumSchema).optional(),
});
