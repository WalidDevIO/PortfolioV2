import { z } from 'zod';
import { ProjetUpdateManyMutationInputObjectSchema } from './objects/ProjetUpdateManyMutationInput.schema';
import { ProjetWhereInputObjectSchema } from './objects/ProjetWhereInput.schema';

export const ProjetUpdateManySchema = z.object({
  data: ProjetUpdateManyMutationInputObjectSchema,
  where: ProjetWhereInputObjectSchema.optional(),
});
