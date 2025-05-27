import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/app/sanity/client";
import { FaGithub } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import {
  PiChat,
  PiGithubLogo,
  PiScroll,
  PiScrollDuotone,
  PiShootingStar,
} from "react-icons/pi";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto h-full flex flex-col justify-center ">
      <section
        aria-label="Home"
        id="hero"
        className="text-center relative place-items-center  justify-center space-y-6 flex content-between w-full flex-col md:flex-row mx-auto md:max-w-screen-3xl p-5 md:justify-around"
      >
        <div className="">
          <h1 className="text-8xl font-extrabold md:text-9xl">Hello!</h1>{" "}
          <div className="flex flex-col space-y-8 justify-center p-2">
            <h2 className="text-2xl font-bold md:text-5xl">
              My name is Terrell.
            </h2>
            <h3 className="text-md max-w-md">
              I’m a{" "}
              <span className="font-bold decoration-2 underline">
                full-stack developer
              </span>{" "}
              with a passion for practical systems, clean UI, and building
              things that people actually use.
            </h3>
            <div className="w-full flex flex-row leading-0 flex-wrap justify-center md:justify-between">
              <button className="text-white border flex flex-row m-1 justify-center items-center space-x-1 border-white rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-200 hover:text-zinc-950">
                <span>Contact Me!</span>
                <PiChat />
              </button>
              <button className="text-white border flex flex-row m-1 justify-center items-center space-x-1 border-white rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-200 hover:text-zinc-950">
                <span>Github</span>
                <PiGithubLogo />
              </button>
              <Link href="/blog">
                <button className="text-white border flex flex-row m-1 justify-center items-center space-x-1 border-white rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-200 hover:text-zinc-950">
                  <span>Blog</span>
                  <PiScroll />
                </button>
              </Link>
              <button className="text-white border flex flex-row m-1 justify-center items-center space-x-1 border-white rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-200 hover:text-zinc-950">
                <span>Projects</span>
                <PiShootingStar />
              </button>
            </div>
          </div>
        </div>
        <svg
          id="logo"
          className="aspect-square w-1/3"
          version="1.1"
          viewBox="0 0 1e3 1e3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-25 stroke-zinc-500 fill-zinc-900"
            d="m760.52 519.2-107.98-50.948v523.09m-40.153-774.86-151.84-71.698 209.6-88.445m179.9 369.36 108.31-45.569m-606.73-189.34 498.41 234.91 0.37566 135.71m-498.91-234.93 0.0116 522.99m-0.0376-522.99 4.4e-4 0.0174 108.98 51.144m-108.97-186.93-0.01006 135.77-102.54 42.75m-107.28-90.664 209.84-87.862m-312.67 39.881 102.81 48.016-0.04292 135.68m-102.67-48.637-0.074659-135.33 528.43-222.42 102.89 48.437 0.28568 135.35-58.044 24.533 345.97 163.62 0.27306 135.45-108.36 45.767-89.783-41.848 0.0377 426.38-108.36 45.437-102.67-48.094v-523.18l-89.069-42.12 7e-3 425.76-108.95 46.04-102.58-48.464v-431.72l-107.35 45.037z"
          ></path>
        </svg>
      </section>
    </main>
  );
}
