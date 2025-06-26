"use client";

import React from "react";
import Link from "next/link";
import { client } from "@/app/sanity/client";
import {
  PortableTextComponents,
  toPlainText,
  PortableText,
  PortableTextTypeComponentProps,
} from "next-sanity";
import { motion } from "motion/react";
import type { TypedObject } from "@portabletext/types";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/asset-utils";
import slugify from "@/app/lib/slugify";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  imageUrl: string;
  body: TypedObject[];
  categories: { title: string }[];
  headings: { style: string; text: string }[];
}

type ImageValue = SanityImageSource & {
  alt?: string;
};

const imageUrlBuilder = urlBuilder(client);

const ImageComponent = ({
  value,
  isInline,
}: PortableTextTypeComponentProps<ImageValue>) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={imageUrlBuilder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
};

const components: PortableTextComponents = {
  types: {
    image: ImageComponent,
  },
  block: {
    h1: ({ value, children }) => {
      const id = slugify(toPlainText(value));
      return <h1 id={id}>{children}</h1>;
    },
    h3: ({ value, children }) => {
      const id = slugify(toPlainText(value));
      return <h3 id={id}>{children}</h3>;
    },
    h4: ({ value, children }) => {
      const id = slugify(toPlainText(value));
      return <h4 id={id}>{children}</h4>;
    },
  },
};

const AnimatedBlogPost = ({ post }: { post: Post }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grow flex flex-col w-full my-10 py-5"
    >
      <div className="container grow w-11/12 md:max-w-3xl mx-auto bg-zinc-100 dark:bg-stone-950 rounded-2xl border-zinc-600 border">
        <div className=" p-2 font-mono pl-5 dark:bg-zinc-900 truncate rounded-t-2xl bg-zinc-300">
          {post?.slug?.current}.md
        </div>
        <div className="p-5 md:p-10 flex flex-col space-y-5 py-10 md:mx-10">
          <Link href="/blog" className="hover:underline">
            ← Back to posts
          </Link>
          {post?.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post?.title}
              className="aspect-video rounded-xl mx-auto w-full"
              width="550"
              height="310"
            />
          )}
          <h1 className="text-xl md:text-4xl font-bold mb-8">{post?.title}</h1>
          <div className="prose prose-stone dark:prose-invert  break-words mx-auto w-full">
            <p className="text-sm font-bold">
              Published: {new Date(post?.publishedAt).toLocaleDateString()}
            </p>
            {Array.isArray(post?.body) && (
              <PortableText value={post?.body} components={components} />
            )}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default AnimatedBlogPost;
