import { client } from "@/app/sanity/client";
import AnimatedBlog from "@/app/components/blog/animated-blog";

const options = { next: { revalidate: 30 } };
const CATEGORY_ID_QUERY = `*[_type == "category" && title == $title][0]._id`;

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
};

type Props = {
  params: Record<string, never>;
  searchParams: {
    category?: string;
  };
};

export default async function BlogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const categorySlug = resolvedSearchParams?.category;
  console.log("BlogPage - categorySlug:", categorySlug);

  let categoryId: string | null = null;

  if (categorySlug) {
    categoryId = await client.fetch(CATEGORY_ID_QUERY, { title: categorySlug });
    console.log("BlogPage - fetched categoryId:", categoryId);
  }

  const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    ${categoryId ? "&& $category in categories[]._ref" : ""}
  ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt
  }`;

  const posts = await client.fetch<Post[]>(
    POSTS_QUERY,
    categoryId ? { category: categoryId } : {},
    options
  );

  return <AnimatedBlog posts={posts} categorySlug={categorySlug} />;
}
