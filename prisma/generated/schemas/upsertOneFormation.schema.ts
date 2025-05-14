import { z } from 'zod';
import { FormationWhereUniqueInputObjectSchema } from './objects/FormationWhereUniqueInput.schema';
import { FormationCreateInputObjectSchema } from './objects/FormationCreateInput.schema';
import { FormationUncheckedCreateInputObjectSchema } from './objects/FormationUncheckedCreateInput.schema';
import { FormationUpdateInputObjectSchema } from './objects/FormationUpdateInput.schema';
import { FormationUncheckedUpdateInputObjectSchema } from './objects/FormationUncheckedUpdateInput.schema';

export const FormationUpsertSchema = z.object({
  where: FormationWhereUniqueInputObjectSchema,
  create: z.union([
    FormationCreateInputObjectSchema,
    FormationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FormationUpdateInputObjectSchema,
    FormationUncheckedUpdateInputObjectSchema,
  ]),
});
