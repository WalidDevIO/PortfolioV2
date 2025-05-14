import { z } from 'zod';

export const SkillScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'name',
  'description',
  'level',
]);
