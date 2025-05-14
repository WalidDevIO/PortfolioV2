import { z } from 'zod';
import { ConfigurationCreateInputObjectSchema } from './objects/ConfigurationCreateInput.schema';
import { ConfigurationUncheckedCreateInputObjectSchema } from './objects/ConfigurationUncheckedCreateInput.schema';

export const ConfigurationCreateOneSchema = z.object({
  data: z.union([
    ConfigurationCreateInputObjectSchema,
    ConfigurationUncheckedCreateInputObjectSchema,
  ]),
});
