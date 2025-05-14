import { z } from 'zod';
import { ProjetCreateManyInputObjectSchema } from './objects/ProjetCreateManyInput.schema';

export const ProjetCreateManySchema = z.object({
  data: z.union([
    ProjetCreateManyInputObjectSchema,
    z.array(ProjetCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
