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

async function getPost(slug: string): Promise<SanityDocument | null> {
  return await client.fetch(POST_QUERY, { slug }, options);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post?.title || "404!",
    description: post?.description || "RellSoft",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return <div>404 - Post not found</div>;

  const blogPost: Post = {
    _id: post?._id || "",
    title: post?.title,
    slug: post?.slug,
    publishedAt: post?.publishedAt,
    body: post?.body || [],
    imageUrl: urlFor(post?.mainImage)?.width(550)?.height(310)?.url() || "",
    categories: post?.categories,
  };

  console.log(blogPost);

  return <AnimatedBlogPost post={blogPost} />;
}
