import { z } from 'zod';
import { FormationWhereUniqueInputObjectSchema } from './objects/FormationWhereUniqueInput.schema';

export const FormationDeleteOneSchema = z.object({
  where: FormationWhereUniqueInputObjectSchema,
});
