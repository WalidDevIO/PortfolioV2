import { z } from 'zod';
import { ProjetCreateInputObjectSchema } from './objects/ProjetCreateInput.schema';
import { ProjetUncheckedCreateInputObjectSchema } from './objects/ProjetUncheckedCreateInput.schema';

export const ProjetCreateOneSchema = z.object({
  data: z.union([
    ProjetCreateInputObjectSchema,
    ProjetUncheckedCreateInputObjectSchema,
  ]),
});
