import { defineCollection, z } from 'astro:content';

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    postDate: z.date().optional(),
    type: z.string().default('Announcement'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string(),
    location: z.string().optional(),
    country: z.string().optional(),
    email: z.string().email().optional(),
    group: z.enum(['chair', 'junior', 'student']),
    order: z.number().default(999),
    href: z.string().url().optional(),
    image: z.string().optional(),
    imagePosition: z.string().optional(),
    imageScale: z.number().optional(),
    imageOffsetX: z.string().optional(),
    imageOffsetY: z.string().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    href: z.string().url().optional(),
  }),
});

export const collections = { announcements, people, resources };
