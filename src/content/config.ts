import { z, defineCollection } from 'astro:content';

const testimonyCollections = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    shortVersion: z.string(),
    author: z.string()
  }),
});

export const collections = {
  'testimonies': testimonyCollections,
};