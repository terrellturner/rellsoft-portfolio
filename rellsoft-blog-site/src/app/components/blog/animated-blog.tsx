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
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container my-10 grow max-w-xs md:max-w-2xl mx-auto bg-stone-950 rounded-2xl border-zinc-600 border"
    >
      <div className=" p-2 font-mono pl-5 bg-zinc-900">blog.tsx</div>
      <div className="p-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
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
            <li className="p-1 md:p-3 md:pl-5 group" key={post._id}>
              <Link className="group" href={`/blog/${post.slug.current}`}>
                <h2 className="text-2xl font-semibold text-rellsoft-green group-hover:underline ">
                  {post.title}
                </h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.main>
  );
};

export default AnimatedBlog;
