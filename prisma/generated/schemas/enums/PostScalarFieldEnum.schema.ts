import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'title',
  'content',
  'slug',
  'published',
  'description',
]);
