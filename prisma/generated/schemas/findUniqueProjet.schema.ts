import { z } from 'zod';
import { ProjetWhereUniqueInputObjectSchema } from './objects/ProjetWhereUniqueInput.schema';

export const ProjetFindUniqueSchema = z.object({
  where: ProjetWhereUniqueInputObjectSchema,
});
