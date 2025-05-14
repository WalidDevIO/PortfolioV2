import { z } from 'zod';
import { ExperienceCreateInputObjectSchema } from './objects/ExperienceCreateInput.schema';
import { ExperienceUncheckedCreateInputObjectSchema } from './objects/ExperienceUncheckedCreateInput.schema';

export const ExperienceCreateOneSchema = z.object({
  data: z.union([
    ExperienceCreateInputObjectSchema,
    ExperienceUncheckedCreateInputObjectSchema,
  ]),
});
