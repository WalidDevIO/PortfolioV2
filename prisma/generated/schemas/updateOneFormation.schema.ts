import { z } from 'zod';
import { FormationUpdateInputObjectSchema } from './objects/FormationUpdateInput.schema';
import { FormationUncheckedUpdateInputObjectSchema } from './objects/FormationUncheckedUpdateInput.schema';
import { FormationWhereUniqueInputObjectSchema } from './objects/FormationWhereUniqueInput.schema';

export const FormationUpdateOneSchema = z.object({
  data: z.union([
    FormationUpdateInputObjectSchema,
    FormationUncheckedUpdateInputObjectSchema,
  ]),
  where: FormationWhereUniqueInputObjectSchema,
});
