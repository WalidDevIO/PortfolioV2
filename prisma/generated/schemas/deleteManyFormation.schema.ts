import { z } from 'zod';
import { FormationWhereInputObjectSchema } from './objects/FormationWhereInput.schema';

export const FormationDeleteManySchema = z.object({
  where: FormationWhereInputObjectSchema.optional(),
});
