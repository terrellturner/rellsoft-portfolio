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
  return (
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container grow w-11/12 pb-12  lg:w-2/3 bg-zinc-100 dark:bg-stone-950 rounded-2xl border-zinc-600 border"
    >
      <div className=" p-2 font-mono pl-5 dark:bg-zinc-900 bg-zinc-400 rounded-t-2xl">
        blog.tsx
      </div>
      <div className="p-5 md:p-10">
        <h1 className="text-xl md:text-4xl font-bold mb-2 flex flex-row dark:text-rellsoft-green text-">
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
              <span className="font-bold text-stone-800 dark:text-rellsoft-green text-xl">
                {categorySlug}
              </span>
            </span>
          : ""}
        </h2>
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li
              className="p-3 md:pl-5 group flex flex-row md:justify-between items-center border border-stone-500 dark:border-zinc-500 rounded-2xl"
              key={post._id}
            >
              <Link className="w-full " href={`/blog/${post.slug.current}`}>
                <h2 className="text-lg truncate grow md:w-sm font-semibold text-rellsoft-orange dark:text-rellsoft-green group-hover:underline md:text-2xl">
                  {post.title}
                </h2>
                <p className="group dark:text-zinc-400 text-stone-800">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
              <div className="w-1/3 md:flex flex-row flex-wrap justify-center text-center hidden">
                {post.categories?.map((category) => (
                  <span
                    className="text-stone-950 transition-colors duration-300 ease-in-out hover:text-rellsoft-orange dark:hover:text-zinc-300 dark:text-rellsoft-green p-1 text-sm border border-rellsoft-orange dark:border-rellsoft-green rounded-full m-1 px-2"
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
