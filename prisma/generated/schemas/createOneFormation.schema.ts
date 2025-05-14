import { z } from 'zod';
import { FormationCreateInputObjectSchema } from './objects/FormationCreateInput.schema';
import { FormationUncheckedCreateInputObjectSchema } from './objects/FormationUncheckedCreateInput.schema';

export const FormationCreateOneSchema = z.object({
  data: z.union([
    FormationCreateInputObjectSchema,
    FormationUncheckedCreateInputObjectSchema,
  ]),
});
