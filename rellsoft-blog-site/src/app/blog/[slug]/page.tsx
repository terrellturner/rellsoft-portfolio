import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/app/sanity/client";
import AnimatedBlogPost from "@/app/components/blog/animated-blog-post";
import type { Post } from "@/app/types/Post";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ?
    imageUrlBuilder({ projectId, dataset }).image(source)
  : null;

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Blog!",
  description: "Made with <3 using Sanity+NextJS+TS!",
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: { category: string | undefined } }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  const blogPost: Post = {
    _id: post._id,
    title: post.title,
    slug: post.slug,
    publishedAt: post.publishedAt,
    body: post.body || [],
    imageUrl: urlFor(post.mainImage)?.width(550)?.height(310)?.url() || "",
    categories: post.categories,
  };

  console.log(blogPost);

  return <AnimatedBlogPost post={blogPost} />;
}
