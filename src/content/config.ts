import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(3, "title deve ter ao menos 3 caracteres"),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    revision: z.number().int().positive().optional(),
    description: z.string().min(10, "description deve ter ao menos 10 caracteres"),
    tags: z.array(z.string().min(1)).min(1, "adicione ao menos uma tag"),
  }),
});

export const collections = {
  blog,
};
