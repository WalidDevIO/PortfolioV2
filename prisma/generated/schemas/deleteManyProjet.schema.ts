import { z } from 'zod';
import { ProjetWhereInputObjectSchema } from './objects/ProjetWhereInput.schema';

export const ProjetDeleteManySchema = z.object({
  where: ProjetWhereInputObjectSchema.optional(),
});
