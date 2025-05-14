import { z } from 'zod';
import { ProjetWhereUniqueInputObjectSchema } from './objects/ProjetWhereUniqueInput.schema';

export const ProjetDeleteOneSchema = z.object({
  where: ProjetWhereUniqueInputObjectSchema,
});
