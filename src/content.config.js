import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pokemon = defineCollection({ 
    loader: glob({ pattern: "**/*.mdx", base: './src/pokemon'}),
    schema: z.object({
        title: z.string(),
        imageSrc: z.string(),
        description: z.string(),
        lastUpdate: z.coerce.date()
    })
});

export const collections = { pokemon };