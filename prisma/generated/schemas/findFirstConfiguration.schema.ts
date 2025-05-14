import { z } from 'zod';
import { ConfigurationOrderByWithRelationInputObjectSchema } from './objects/ConfigurationOrderByWithRelationInput.schema';
import { ConfigurationWhereInputObjectSchema } from './objects/ConfigurationWhereInput.schema';
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema';
import { ConfigurationScalarFieldEnumSchema } from './enums/ConfigurationScalarFieldEnum.schema';

export const ConfigurationFindFirstSchema = z.object({
  orderBy: z
    .union([
      ConfigurationOrderByWithRelationInputObjectSchema,
      ConfigurationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConfigurationWhereInputObjectSchema.optional(),
  cursor: ConfigurationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ConfigurationScalarFieldEnumSchema).optional(),
});
