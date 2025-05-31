import { z, defineCollection } from "astro:content";

const testimonyCollections = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    shortVersion: z.string(),
    author: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techs: z.array(z.string()),
    imageSrc: z.string(),
    imageAlt: z.string(),
    projectHref: z.optional(z.string()),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    imageSrc: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  testimonies: testimonyCollections,
  projects: projectCollection,
  blogs: blogCollection,
};
