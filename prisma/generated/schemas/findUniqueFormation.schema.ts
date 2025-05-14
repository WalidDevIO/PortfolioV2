import { z } from 'zod';
import { FormationWhereUniqueInputObjectSchema } from './objects/FormationWhereUniqueInput.schema';

export const FormationFindUniqueSchema = z.object({
  where: FormationWhereUniqueInputObjectSchema,
});
