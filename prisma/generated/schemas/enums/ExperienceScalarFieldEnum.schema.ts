import { z } from 'zod';

export const ExperienceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'duration',
  'location',
  'title',
  'description',
  'image',
  'technologies',
  'extraLinks',
  'type',
  'landingDescription',
]);
