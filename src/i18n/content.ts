import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLang, type Lang } from "./config";

export type BlogCollectionKey = "blog" | "blogEn" | "blogEs";

export const getBlogCollectionKey = (lang: Lang): BlogCollectionKey => {
  if (lang === "en") return "blogEn";
  if (lang === "es") return "blogEs";
  return "blog";
};

export const getPostsByLang = async (lang: Lang) => {
  const collection = getBlogCollectionKey(lang);

  if (collection === "blog") {
    return getCollection("blog") as Promise<BlogPostEntry[]>;
  }

  if (collection === "blogEn") {
    return getCollection("blogEn") as Promise<BlogPostEntry[]>;
  }

  return getCollection("blogEs") as Promise<BlogPostEntry[]>;
};

export type BlogPostEntry =
  | CollectionEntry<"blog">
  | CollectionEntry<"blogEn">
  | CollectionEntry<"blogEs">;

export const sortPostsByDateDesc = (posts: BlogPostEntry[]): BlogPostEntry[] =>
  posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

export const normalizeLang = (lang?: string): Lang => {
  if (lang === "en" || lang === "es" || lang === "pt-br") {
    return lang;
  }

  return defaultLang;
};
