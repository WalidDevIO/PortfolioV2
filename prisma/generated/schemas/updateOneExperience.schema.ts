import { z } from 'zod';
import { ExperienceUpdateInputObjectSchema } from './objects/ExperienceUpdateInput.schema';
import { ExperienceUncheckedUpdateInputObjectSchema } from './objects/ExperienceUncheckedUpdateInput.schema';
import { ExperienceWhereUniqueInputObjectSchema } from './objects/ExperienceWhereUniqueInput.schema';

export const ExperienceUpdateOneSchema = z.object({
  data: z.union([
    ExperienceUpdateInputObjectSchema,
    ExperienceUncheckedUpdateInputObjectSchema,
  ]),
  where: ExperienceWhereUniqueInputObjectSchema,
});
