import { z } from 'zod';
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema';

export const ConfigurationFindUniqueSchema = z.object({
  where: ConfigurationWhereUniqueInputObjectSchema,
});
