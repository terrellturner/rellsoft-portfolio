import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/app/sanity/client";
import AnimatedBlogPost from "@/app/components/blog/animated-blog-post";
import type { Post } from "@/app/types/Post";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
        ...,
        "headings": body[style in ["h1","h3", "h4"]]{style, "text": children[0].text}
        }`;

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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  const title = post?.title ?? "Untitled";
  const description = post?.description ?? "RellSoft";
  const imageUrl =
    urlFor(post?.mainImage)?.width(1200)?.height(630)?.url() || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://rellsoft.dev/blog/${slug}`,
      siteName: `Terrell Turner`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
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
    headings: post?.headings,
  };

  return <AnimatedBlogPost post={blogPost} />;
}
