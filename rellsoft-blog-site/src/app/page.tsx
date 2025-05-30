"use client";

import Link from "next/link";
import {
  PiGithubLogo,
  PiScroll,
  PiShootingStar,
  PiVideoCamera,
} from "react-icons/pi";
import { motion } from "motion/react";

export default function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col justify-center transition-scale ease-in-out duration-200">
      <section
        aria-label="Home"
        id="hero"
        className="text-center items-center lg:pt-0 lg:text-left relative place-items-center justify-center space-y-6 flex content-between w-full flex-col lg:flex-row mx-auto md:max-w-screen-3xl p-5 md:justify-around"
      >
        <div className="lg:p-5 flex flex-col justify-center">
          <h1 className="text-8xl font-extrabold md:text-9xl text-rellsoft-green">
            Hello!
          </h1>{" "}
          <div className="flex flex-col space-y-8 justify-center p-2">
            <h2 className="text-2xl font-bold md:text-5xl">
              My name is Terrell.
            </h2>
            <h3 className="text-md lg:max-w-md ml-0.5">
              I’m a{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green">
                full-stack developer
              </span>{" "}
              with a passion for practical systems, clean UI, and building
              things that people actually use.
            </h3>
            <div className="w-full flex flex-row leading-0 flex-wrap md:flex-nowrap justify-center lg:justify-around lg:max-w-lg">
              <button className="bg-rellsoft-green motion-reduce:hover:shadow-none motion-reduce:shadow-none motion-safe:shadow-[0_0_10px_#16f275] hover:shadow-[0_0_20px_#979797] text-zinc-950 flex flex-row m-1.5 lg:m-1 lg:ml-0 ml-0 justify-center items-center space-x-1 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-filter ease-in-out duration-200 hover:bg-zinc-300 hover:text-zinc-950">
                <span>Let&apos;s Talk</span>
                <PiVideoCamera className="text-lg" />
              </button>
              <button className="bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                <span>Github</span>
                <PiGithubLogo className="text-lg" />
              </button>
              <Link href="/blog">
                <button className="bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                  <span>Blog</span>
                  <PiScroll className="text-lg" />
                </button>
              </Link>
              <button className="bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                <span>Projects</span>
                <PiShootingStar className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 932.41547 997.18066"
          className="w-1/3 aspect-square stroke-rellsoft-green stroke-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5 }}
            id="path3"
            d="m 817.86552,560.67545 -0.36566,-135.97617 m -237.66,-209.217 -151.84,-71.698 209.6,-88.444997 m 179.9,369.359997 108.31,-45.569 m -606.85434,-53.65 0.0116,522.99 m -0.0376,-522.99 4.4e-4,0.0174 108.98,51.144 m -108.97,-186.93 -0.0101,135.77 -102.54,42.75 m -107.28,-90.664 209.905,-87.8197 498.475,234.9523 M 6.2798687,229.58668 l 102.8099913,48.016 -0.0429,135.68 M 6.3769687,364.64568 6.3023087,229.31568 534.7323,6.8956824 l 102.89,48.4370006 0.28568,135.615167 -58.044,24.533 345.97,163.62 0.27306,135.45 -108.24152,46.1246 -89.90148,-42.2056 0.0377,426.38 -108.36,45.437 -102.67,-48.35917 v -523.18 l -89.069,-42.12 0.007,425.76 -108.95,46.04 -102.58,-48.464 v -431.72 l -107.35,45.037 z m 613.2647713,625.376 0.35112,-522.7694 107.97118,51.21757"
          />
        </svg>
      </section>
    </main>
  );
}
