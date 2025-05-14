import { z } from 'zod';

export const ConfigurationScalarFieldEnumSchema = z.enum([
  'mail',
  'location',
  'github',
  'linkedin',
  'landingText',
]);
