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
import WordEmphasis from "./components/ui/word-emphasis";

export default function IndexPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto grow flex flex-col justify-center w-full pb-10 md:mb-0 md:py-10"
    >
      <section
        aria-label="Home"
        id="hero"
        className="z-30 flex-col-reverse text-center h-full transition-all duration-500 lg:text-left container relative place-items-center justify-center space-y-6 flex w-full lg:flex-row mx-auto md:max-w-screen-3xl px-5 lg:justify-around text-stone-800 dark:text-zinc-100"
      >
        <div className="lg:p-5 flex flex-col justify-center">
          <h1 className="text-8xl font-extrabold md:text-9xl text-rellsoft-orange dark:text-rellsoft-green ">
            Hello!
          </h1>
          <div className="flex flex-col space-y-8 justify-center p-2 lg:max-w-lg ">
            <h2 className="text-2xl font-bold md:text-5xl">
              My name is Terrell.
            </h2>
            <h3 className="text-md ml-0.5">
              I&#39;m a <WordEmphasis>full-stack developer</WordEmphasis> with a
              passion for practical systems, clean UI, and building things
              designed for people to actually use.
            </h3>
            <h4>
              I love using <WordEmphasis>TypeScript</WordEmphasis>,
              <WordEmphasis>Vite</WordEmphasis>, and
              <WordEmphasis>Tailwind</WordEmphasis> to create robust websites in
              <WordEmphasis>React</WordEmphasis> and
              <WordEmphasis>Next.js</WordEmphasis>.
            </h4>
            <h4>
              Currently, I'm using <WordEmphasis>Express+TS</WordEmphasis> to
              build powerful <WordEmphasis>Node.js</WordEmphasis> servers with
              <WordEmphasis>Prisma</WordEmphasis> and
              <WordEmphasis>PostgreSQL</WordEmphasis>.
            </h4>
            <div className=" w-full flex flex-row leading-0 flex-wrap md:flex-nowrap justify-center lg:justify-around lg:max-w-lg">
              <Link
                href={"mailto:terrell@rellsoft.dev"}
                target="_blank"
                rel="noreferrer noopener"
                className="group text-zinc-100 dark:text-stone-800 bg-rellsoft-orange dark:bg-rellsoft-green motion-reduce:hover:shadow-none motion-reduce:shadow-none dark:motion-safe:shadow-[0_0_10px_#39a85c] dark:motion-safe:hover:shadow-[0_0_20px_#39a85c] hover:border hover:border-stone-800 dark:hover:border-rellsoft-green hover:shadow-[5px_5px_0_#ff7f50] flex flex-row m-1.5 lg:m-1 lg:ml-0  justify-center items-center space-x-1 rounded-lg p-5 w-32 md:w-min whitespace-nowrap cursor-pointer transition-filter ease-in-out duration-200 hover:bg-zinc-100 hover:text-zinc-950"
              >
                <button>
                  <span className="group">Let&apos;s Talk</span>
                </button>
                <PiVideoCamera className="text-lg group-hover:zinc-950" />
              </Link>
              <Link
                href={"https://github.com/terrellturner"}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-zinc-100 dark:bg-zinc-900 group text-zinc-950 dark:text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-rellsoft-orange dark:border-zinc-500 rounded-lg p-5 w-32 md:w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-200 hover:text-zinc-950"
              >
                <button>
                  <span className="group">Github</span>
                </button>
                <PiGithubLogo className="text-lg text-stone-900 dark:text-rellsoft-green group-hover:-translate-y-1 transition-transform group-hover:translate-x-.5 group-hover:text-rellsoft-orange dark:group-hover:text-zinc-950" />
              </Link>
              <Link href="/blog">
                <button className="group bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-rellsoft-orange dark:border-zinc-500 rounded-lg p-5 w-32 md:w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-200 hover:text-zinc-950">
                  <span className="group">Blog</span>
                  <PiScroll className="text-lg text-stone-900 dark:text-rellsoft-green group-hover:-translate-y-1 transition-transform group-hover:translate-x-.5 group-hover:text-rellsoft-orange dark:group-hover:text-zinc-950" />
                </button>
              </Link>
              <Link href="/blog?category=projects">
                <button className="w-32 md:w-min group bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-rellsoft-orange dark:border-zinc-500 rounded-lg p-5 whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-200 hover:text-zinc-950">
                  <span className="group">Projects</span>
                  <PiShootingStar className="text-lg text-stone-900 dark:text-rellsoft-green group-hover:-translate-y-1 transition-transform group-hover:translate-x-.5 group-hover:text-rellsoft-orange dark:group-hover:text-zinc-950" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <RellSoftLogo
          animationLength={1}
          initialAnimation={0}
          classNames="stroke-10 stroke-rellsoft-orange dark:stroke-rellsoft-green h-[16rem] m-5 md:m-0 lg:h-[28rem] 2xl:h-[38rem] transition-all ease-in-out duration-500"
        />
      </section>
    </motion.main>
  );
}
