import { z } from 'zod';
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema';

export const ConfigurationDeleteOneSchema = z.object({
  where: ConfigurationWhereUniqueInputObjectSchema,
});
