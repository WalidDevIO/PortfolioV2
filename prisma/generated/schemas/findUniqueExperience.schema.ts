import { z } from 'zod';
import { ExperienceWhereUniqueInputObjectSchema } from './objects/ExperienceWhereUniqueInput.schema';

export const ExperienceFindUniqueSchema = z.object({
  where: ExperienceWhereUniqueInputObjectSchema,
});
