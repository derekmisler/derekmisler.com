import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({
    base: './src/content/writing',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    // CSS experiment metadata
    cssFeatures: z.array(z.string()).default([]),
    browserSupport: z.enum(['baseline', 'limited', 'experimental']).default('baseline'),
  }),
});

export const collections = { writing };
