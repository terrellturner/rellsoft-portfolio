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
          <h1 className="text-8xl font-extrabold md:text-9xl text-rellsoft-green ">
            Hello!
          </h1>
          <div className="flex flex-col space-y-8 justify-center p-2  lg:max-w-lg ">
            <h2 className="text-2xl font-bold md:text-5xl">
              My name is Terrell.
            </h2>
            <h3 className="text-mdml-0.5">
              I&#39;m a{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                full-stack developer
              </span>{" "}
              with a passion for practical systems, clean UI, and building
              things that people actually use.
            </h3>
            <h4>
              Currently, I&#39;m using{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                TypeScript
              </span>
              ,{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                NextJS
              </span>
              , and{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                Tailwind
              </span>{" "}
              to create supercharged websites in{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700">
                React
              </span>
              .
            </h4>
            <div className="w-full flex flex-row leading-0 flex-wrap md:flex-nowrap justify-center lg:justify-around lg:max-w-lg">
              <button className="group bg-rellsoft-green motion-reduce:hover:shadow-none motion-reduce:shadow-none motion-safe:shadow-[0_0_10px_#16f275] hover:shadow-[0_0_20px_#979797] text-zinc-950 flex flex-row m-1.5 lg:m-1 lg:ml-0 ml-0 justify-center items-center space-x-1 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-filter ease-in-out duration-200 hover:bg-zinc-300 hover:text-zinc-950">
                <span className="group">Let&apos;s Talk</span>
                <PiVideoCamera className="text-lg group-hover:zinc-950" />
              </button>
              <button className="bg-zinc-900 group text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                <span className="group">Github</span>
                <PiGithubLogo className="text-lg group-hover:text-zinc-950 text-rellsoft-green" />
              </button>
              <Link href="/blog">
                <button className="group bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                  <span className="group">Blog</span>
                  <PiScroll className="text-lg group-hover:text-zinc-950 text-rellsoft-green" />
                </button>
              </Link>
              <Link href="/blog?category=projects">
                <button className="group bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                  <span className="group">Projects</span>
                  <PiShootingStar className="text-lg text-rellsoft-green group-hover:-translate-y-1 transition-transform group-hover:translate-x-.5 group-hover:text-zinc-950" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 932.41547 997.18066"
          className="w-1/3 aspect-square stroke-rellsoft-green stroke-12 transition-transform"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5 }}
            id="path3"
            d="m 817.86552,560.67545 -0.36566,-135.97617 m -237.66,-209.217 -151.84,-71.698 209.6,-88.444997 m 179.9,369.359997 108.31,-45.569 m -606.85434,-53.65 0.0116,522.99 m 108.94284,-471.8286 -108.95444,-51.1614 v 0 l -102.56566,42.7514 m -107.28,-90.664 209.905,-87.8197 498.475,234.9523 M 6.2798687,229.58668 l 102.8099913,48.016 -0.0429,135.68 M 6.3769687,364.64568 6.3023087,229.31568 534.7323,6.8956824 l 102.89,48.4370006 0.28568,135.615167 -58.044,24.533 345.97,163.62 0.27306,135.45 -108.24152,46.1246 -89.90148,-42.2056 0.0377,426.38 -108.36,45.437 -102.67,-48.35917 v -523.18 l -89.069,-42.12 0.007,425.76 -108.95,46.04 -102.58,-48.464 v -431.72 l -107.35,45.037 z m 613.2647713,625.376 0.35112,-522.7694 107.97118,51.21757"
          />
        </svg>
      </section>
    </motion.main>
  );
}
