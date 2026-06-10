import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/*.{md,mdx}",
    }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.coerce.date(),
            excerpt: z.string().optional(),
            tags: z.array(z.string()).optional(),
        }),
});

const gallery = defineCollection({
    loader: file("src/data/gallery.json"),
});

export const collections = { blog, gallery };
