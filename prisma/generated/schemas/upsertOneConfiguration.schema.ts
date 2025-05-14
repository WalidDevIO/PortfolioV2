import { z } from 'zod';
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema';
import { ConfigurationCreateInputObjectSchema } from './objects/ConfigurationCreateInput.schema';
import { ConfigurationUncheckedCreateInputObjectSchema } from './objects/ConfigurationUncheckedCreateInput.schema';
import { ConfigurationUpdateInputObjectSchema } from './objects/ConfigurationUpdateInput.schema';
import { ConfigurationUncheckedUpdateInputObjectSchema } from './objects/ConfigurationUncheckedUpdateInput.schema';

export const ConfigurationUpsertSchema = z.object({
  where: ConfigurationWhereUniqueInputObjectSchema,
  create: z.union([
    ConfigurationCreateInputObjectSchema,
    ConfigurationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ConfigurationUpdateInputObjectSchema,
    ConfigurationUncheckedUpdateInputObjectSchema,
  ]),
});
