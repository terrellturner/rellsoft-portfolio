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
  categories: { title: string }[];
}

interface AnimatedBlogProps {
  posts: Post[];
  categorySlug?: string | null;
}

const AnimatedBlog = ({ posts, categorySlug }: AnimatedBlogProps) => {
  console.log(posts);

  return (
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container grow w-11/12 pb-12  md:w-3/5 bg-stone-950 rounded-2xl border-zinc-600 border"
    >
      <div className=" p-2 font-mono pl-5 bg-zinc-900 rounded-t-2xl">
        blog.tsx
      </div>
      <div className="p-5 md:p-10">
        <h1 className="text-xl md:text-4xl font-bold mb-2 flex flex-row">
          <Typewriter
            words={[`@/brain/archive`]}
            loop={1}
            cursor={true}
            cursorStyle={"⚗️"}
            cursorBlinking={false}
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
            <li
              className="p-3 md:pl-5 group flex flex-row md:justify-between items-center border border-rellsoft-green rounded-2xl"
              key={post._id}
            >
              <Link className="w-full " href={`/blog/${post.slug.current}`}>
                <h2 className="text-lg truncate grow md:w-sm font-semibold text-rellsoft-green group-hover:underline md:text-2xl">
                  {post.title}
                </h2>
                <p className="group">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
              <div className="w-1/3 md:flex flex-row flex-wrap justify-center text-center hidden">
                {post.categories?.map((category) => (
                  <span
                    className="text-rellsoft-green p-1 text-sm border border-rellsoft-green rounded-full m-1 px-2"
                    key={category.title}
                  >
                    -
                    <Link href={`/blog?category=${category.title}`}>
                      {category.title}
                    </Link>
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.main>
  );
};

export default AnimatedBlog;
