export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  bodyString: string;
  imageUrl: string;
};
