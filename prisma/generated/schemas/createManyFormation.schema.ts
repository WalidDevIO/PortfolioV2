import { z } from 'zod';
import { FormationCreateManyInputObjectSchema } from './objects/FormationCreateManyInput.schema';

export const FormationCreateManySchema = z.object({
  data: z.union([
    FormationCreateManyInputObjectSchema,
    z.array(FormationCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
