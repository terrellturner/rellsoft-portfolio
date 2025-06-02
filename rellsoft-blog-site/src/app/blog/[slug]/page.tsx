import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/app/sanity/client";
import AnimatedBlogPost from "@/app/components/blog/animated-blog-post";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ?
    imageUrlBuilder({ projectId, dataset }).image(source)
  : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );
  const postImageUrl =
    post?.image ? urlFor(post?.image)?.width(550).height(310).url() : null;

  return <AnimatedBlogPost post={post} postImageUrl={postImageUrl} />;
}
