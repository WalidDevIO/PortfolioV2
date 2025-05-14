import { z } from 'zod';

export const FormationScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'duration',
  'location',
  'title',
  'description',
  'image',
  'technologies',
  'extraLinks',
  'speciality',
  'landingDescription',
]);
