import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';

export const SkillDeleteOneSchema = z.object({
  where: SkillWhereUniqueInputObjectSchema,
});
