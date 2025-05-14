import { z } from 'zod';
import { ProjetUpdateInputObjectSchema } from './objects/ProjetUpdateInput.schema';
import { ProjetUncheckedUpdateInputObjectSchema } from './objects/ProjetUncheckedUpdateInput.schema';
import { ProjetWhereUniqueInputObjectSchema } from './objects/ProjetWhereUniqueInput.schema';

export const ProjetUpdateOneSchema = z.object({
  data: z.union([
    ProjetUpdateInputObjectSchema,
    ProjetUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjetWhereUniqueInputObjectSchema,
});
