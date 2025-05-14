import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';

export const SkillFindUniqueSchema = z.object({
  where: SkillWhereUniqueInputObjectSchema,
});
