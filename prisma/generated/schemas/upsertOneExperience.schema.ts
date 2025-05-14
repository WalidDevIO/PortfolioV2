import { z } from 'zod';
import { ExperienceWhereUniqueInputObjectSchema } from './objects/ExperienceWhereUniqueInput.schema';
import { ExperienceCreateInputObjectSchema } from './objects/ExperienceCreateInput.schema';
import { ExperienceUncheckedCreateInputObjectSchema } from './objects/ExperienceUncheckedCreateInput.schema';
import { ExperienceUpdateInputObjectSchema } from './objects/ExperienceUpdateInput.schema';
import { ExperienceUncheckedUpdateInputObjectSchema } from './objects/ExperienceUncheckedUpdateInput.schema';

export const ExperienceUpsertSchema = z.object({
  where: ExperienceWhereUniqueInputObjectSchema,
  create: z.union([
    ExperienceCreateInputObjectSchema,
    ExperienceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExperienceUpdateInputObjectSchema,
    ExperienceUncheckedUpdateInputObjectSchema,
  ]),
});
