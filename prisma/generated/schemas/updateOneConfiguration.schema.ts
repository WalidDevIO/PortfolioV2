import { z } from 'zod';
import { ConfigurationUpdateInputObjectSchema } from './objects/ConfigurationUpdateInput.schema';
import { ConfigurationUncheckedUpdateInputObjectSchema } from './objects/ConfigurationUncheckedUpdateInput.schema';
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema';

export const ConfigurationUpdateOneSchema = z.object({
  data: z.union([
    ConfigurationUpdateInputObjectSchema,
    ConfigurationUncheckedUpdateInputObjectSchema,
  ]),
  where: ConfigurationWhereUniqueInputObjectSchema,
});
