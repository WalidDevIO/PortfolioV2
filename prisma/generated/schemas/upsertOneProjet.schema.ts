import { z } from 'zod';
import { ProjetWhereUniqueInputObjectSchema } from './objects/ProjetWhereUniqueInput.schema';
import { ProjetCreateInputObjectSchema } from './objects/ProjetCreateInput.schema';
import { ProjetUncheckedCreateInputObjectSchema } from './objects/ProjetUncheckedCreateInput.schema';
import { ProjetUpdateInputObjectSchema } from './objects/ProjetUpdateInput.schema';
import { ProjetUncheckedUpdateInputObjectSchema } from './objects/ProjetUncheckedUpdateInput.schema';

export const ProjetUpsertSchema = z.object({
  where: ProjetWhereUniqueInputObjectSchema,
  create: z.union([
    ProjetCreateInputObjectSchema,
    ProjetUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProjetUpdateInputObjectSchema,
    ProjetUncheckedUpdateInputObjectSchema,
  ]),
});
