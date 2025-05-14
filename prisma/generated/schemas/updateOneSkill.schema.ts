import { z } from 'zod';
import { SkillUpdateInputObjectSchema } from './objects/SkillUpdateInput.schema';
import { SkillUncheckedUpdateInputObjectSchema } from './objects/SkillUncheckedUpdateInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';

export const SkillUpdateOneSchema = z.object({
  data: z.union([
    SkillUpdateInputObjectSchema,
    SkillUncheckedUpdateInputObjectSchema,
  ]),
  where: SkillWhereUniqueInputObjectSchema,
});
