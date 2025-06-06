"use client";

import Link from "next/link";
import {
  PiGithubLogo,
  PiScroll,
  PiShootingStar,
  PiVideoCamera,
} from "react-icons/pi";
import "@/app/globals.css";
import { motion } from "motion/react";
import RellSoftLogo from "./components/rellsoft-logo";

export default function IndexPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container mx-auto grow flex flex-col justify-center transition-all"
    >
      <section
        aria-label="Home"
        id="hero"
        className="z-30 text-center items-center lg:pt-0 lg:text-left relative place-items-center justify-center space-y-6 flex content-between w-full flex-col lg:flex-row mx-auto md:max-w-screen-3xl p-5 md:justify-around"
      >
        <div className="lg:p-5 flex flex-col justify-center">
          <h1 className="text-8xl font-extrabold md:text-9xl text-rellsoft-green-muted dark:text-rellsoft-green ">
            Hello!
          </h1>
          <div className="flex flex-col space-y-8 justify-center p-2  lg:max-w-lg ">
            <h2 className="text-2xl font-bold md:text-5xl">
              My name is Terrell.
            </h2>
            <h3 className="text-mdml-0.5">
              I&#39;m a{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green-muted dark:decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                full-stack developer
              </span>{" "}
              with a passion for practical systems, clean UI, and building
              things that people actually use.
            </h3>
            <h4>
              Currently, I&#39;m using{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green-muted dark:decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                TypeScript
              </span>
              ,{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green-muted dark:decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                NextJS
              </span>
              , and{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green-muted dark:decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                Tailwind
              </span>{" "}
              to create supercharged websites in{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green-muted dark:decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                React
              </span>
              .
            </h4>
            <div className="w-full flex flex-row leading-0 flex-wrap md:flex-nowrap justify-center lg:justify-around lg:max-w-lg">
              <button className="group text-zinc-100 dark:text-zinc-900 bg-rellsoft-green-muted dark:bg-rellsoft-green motion-reduce:hover:shadow-none motion-reduce:shadow-none dark:motion-safe:shadow-[0_0_10px_#39a85c] dark:motion-safe:hover:shadow-[0_0_20px_#39a85c]  flex flex-row m-1.5 lg:m-1 lg:ml-0 ml-0 justify-center items-center space-x-1 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-filter ease-in-out duration-200 hover:bg-zinc-300 hover:text-zinc-950">
                <span className="group">Let&apos;s Talk</span>
                <PiVideoCamera className="text-lg group-hover:zinc-950" />
              </button>
              <button className="bg-zinc-300 dark:bg-zinc-900 group text-zinc-950 dark:text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-800 dark:border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                <span className="group">Github</span>
                <PiGithubLogo className="text-lg text-stone-900 dark:text-rellsoft-green group-hover:-translate-y-1 transition-transform group-hover:translate-x-.5 group-hover:text-zinc-950" />
              </button>
              <Link href="/blog">
                <button className="group bg-zinc-300 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-800 dark:border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                  <span className="group">Blog</span>
                  <PiScroll className="text-lg text-stone-900 dark:text-rellsoft-green group-hover:-translate-y-1 transition-transform group-hover:translate-x-.5 group-hover:text-zinc-950" />
                </button>
              </Link>
              <Link href="/blog?category=projects">
                <button className="group bg-zinc-300 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-800 dark:border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                  <span className="group">Projects</span>
                  <PiShootingStar className="text-lg text-stone-900 dark:text-rellsoft-green group-hover:-translate-y-1 transition-transform group-hover:translate-x-.5 group-hover:text-zinc-950" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <RellSoftLogo
          animationLength={1}
          initialAnimation={0}
          classNames="stroke-10 stroke-rellsoft-green-muted dark:stroke-rellsoft-green h-1/2"
        />
      </section>
    </motion.main>
  );
}
