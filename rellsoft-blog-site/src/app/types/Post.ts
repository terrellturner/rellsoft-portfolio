import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: PortableTextBlock[];
  imageUrl: string;
  categories: { title: string }[];
  headings: { style: string; text: string }[];
};
