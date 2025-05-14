import { z } from 'zod';
import { SkillCreateInputObjectSchema } from './objects/SkillCreateInput.schema';
import { SkillUncheckedCreateInputObjectSchema } from './objects/SkillUncheckedCreateInput.schema';

export const SkillCreateOneSchema = z.object({
  data: z.union([
    SkillCreateInputObjectSchema,
    SkillUncheckedCreateInputObjectSchema,
  ]),
});
