import { z } from 'zod';

export const ProjetScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'title',
  'duration',
  'location',
  'description',
  'image',
  'technologies',
  'extraLinks',
  'littleDescription',
  'landingDescription',
]);
