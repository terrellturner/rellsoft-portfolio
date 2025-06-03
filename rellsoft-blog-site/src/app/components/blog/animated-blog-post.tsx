"use client";

import React from "react";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  bodyString: string;
  imageUrl: string;
}

const AnimatedBlogPost = ({ post }: { post: Post }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container my-10 grow max-w-xs md:max-w-3xl mx-auto bg-stone-950 rounded-2xl border-zinc-600 border"
    >
      <div className=" p-2 font-mono pl-5 bg-zinc-900">
        {post?.slug?.current}.tsx
      </div>
      <div className="p-10">
        <Link href="/blog" className="hover:underline">
          ← Back to posts
        </Link>
        {post?.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post?.title}
            className="aspect-video rounded-xl"
            width="550"
            height="310"
          />
        )}
        <h1 className="text-4xl font-bold mb-8">{post?.title}</h1>
        <div className="prose">
          <p>Published: {new Date(post?.publishedAt).toLocaleDateString()}</p>
          {Array.isArray(post?.bodyString) && (
            <PortableText value={post?.bodyString} />
          )}
        </div>
      </div>
    </motion.main>
  );
};

export default AnimatedBlogPost;
