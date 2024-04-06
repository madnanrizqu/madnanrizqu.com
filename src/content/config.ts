import { z, defineCollection } from 'astro:content';

const testimonyCollections = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    shortVersion: z.string(),
    author: z.string()
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techs: z.array(z.string()),
    imageSrc: z.string(),
    imageAlt: z.string(),
    projectHref: z.optional(z.string())
  })
})

export const collections = {
  'testimonies': testimonyCollections,
  'projects': projectCollection
};