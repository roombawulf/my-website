import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const demos = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        link: z.string().optional(),
        cover: image().optional(),
    })
});

export const collections = {
  'demos': demos,
};