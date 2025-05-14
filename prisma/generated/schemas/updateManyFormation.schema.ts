import { z } from 'zod';
import { FormationUpdateManyMutationInputObjectSchema } from './objects/FormationUpdateManyMutationInput.schema';
import { FormationWhereInputObjectSchema } from './objects/FormationWhereInput.schema';

export const FormationUpdateManySchema = z.object({
  data: FormationUpdateManyMutationInputObjectSchema,
  where: FormationWhereInputObjectSchema.optional(),
});
