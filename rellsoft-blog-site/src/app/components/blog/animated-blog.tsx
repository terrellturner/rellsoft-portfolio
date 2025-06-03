"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

interface AnimatedBlogProps {
  posts: Post[];
  categorySlug?: string | null;
}

const AnimatedBlog = ({ posts, categorySlug }: AnimatedBlogProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container min-h-screen max-w-xl p-8 mx-auto"
    >
      <Link href="/">← Home</Link>
      <h1 className="text-4xl font-bold mb-2">
        <Typewriter
          words={[`@/brain/archive`]}
          loop={1}
          cursor={true}
          cursorBlinking={true}
          cursorColor="oklch(0.8415 0.2273 150.21)"
        />
      </h1>
      <h2 className="mb-8">
        {categorySlug ?
          <span>
            Posts tagged with{" "}
            <span className="font-bold text-rellsoft-green text-xl">
              {categorySlug}
            </span>
          </span>
        : ""}
      </h2>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AnimatedBlog;
