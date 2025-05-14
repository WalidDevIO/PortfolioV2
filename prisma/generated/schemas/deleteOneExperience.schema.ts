import { z } from 'zod';
import { ExperienceWhereUniqueInputObjectSchema } from './objects/ExperienceWhereUniqueInput.schema';

export const ExperienceDeleteOneSchema = z.object({
  where: ExperienceWhereUniqueInputObjectSchema,
});
