"use client";

import Link from "next/link";
import {
  PiGithubLogo,
  PiScroll,
  PiShootingStar,
  PiVideoCamera,
} from "react-icons/pi";
import "@/app/globals.css";
import { AnimatePresence, motion } from "motion/react";
import RellSoftLogo from "./components/rellsoft-logo";
import WordEmphasis from "./components/ui/word-emphasis";
import SkillBadge from "./components/ui/skill-badge";
import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiCss3,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { useState } from "react";

export default function IndexPage() {
  const [skillsTabIndex, setSkillsTabIndex] = useState(0);

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
        <div className="lg:p-5 flex flex-col justify-center space-y-8 lg:max-w-xl items-center">
          <div className="flex flex-col space-y-6 justify-center p-2">
            <h1 className="text-8xl -ml-1 p-0 font-extrabold md:text-9xl text-rellsoft-orange dark:text-rellsoft-green ">
              Hello!
            </h1>
            <h2 className="text-2xl font-bold md:text-5xl">
              My name is Terrell.
            </h2>
            <h3 className="text-md ml-0.5">
              I&#39;m a <WordEmphasis>full-stack developer</WordEmphasis> with a
              passion for practical systems, clean UI, and building things that
              deliver practical value.
            </h3>
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
          {/* Skills */}
          <div className="hidden w-11/12 md:inline bg-zinc-100 dark:bg-stone-950 rounded-2xl border-zinc-600 border">
            <div className=" p-2 font-mono pl-5 dark:bg-zinc-900 bg-zinc-300 rounded-t-2xl">
              skills.md
            </div>
            <div className="flex flex-row place-items-center justify-center m-4 h-14 bg-stone-300 dark:bg-stone-800 rounded-2xl relative">
              <div
                className="absolute transition-transform duration-300 ease-in-out flex-1 bg-rellsoft-orange dark:bg-rellsoft-green h-full z-10 rounded-2xl w-1/3 -translate-x-full"
                style={{ transform: `translateX(${skillsTabIndex * 100}%)` }}
              ></div>
              <button
                onClick={() => setSkillsTabIndex(0)}
                className={`p-4 flex-1 text-center rounded-2xl font-bold text-lg z-20 cursor-pointer ${skillsTabIndex === 0 ? "dark:text-stone-800 text-stone-50" : `text-stone-900 dark:text-rellsoft-green`}`}
              >
                Frontend
              </button>
              <button
                onClick={() => setSkillsTabIndex(1)}
                className={`p-4 flex-1 text-center font-bold text-lg z-20 cursor-pointer ${skillsTabIndex === 1 ? "dark:text-stone-800 text-stone-50" : `text-stone-900 dark:text-rellsoft-green`}`}
              >
                Backend
              </button>
              <button
                onClick={() => setSkillsTabIndex(2)}
                className={`p-4 leading-4 flex-1 text-center font-bold text-lg z-20 cursor-pointer ${skillsTabIndex === 2 ? "dark:text-stone-800 text-stone-50" : `text-stone-900 dark:text-rellsoft-green`}`}
              >
                Tools & Languages
              </button>
            </div>
            <article className="p-2 flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                {/* Frontend skills */}
                {skillsTabIndex === 0 && (
                  <motion.div
                    key={skillsTabIndex}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 200, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-row p-3 pt-4 flex-wrap"
                    transition={{
                      duration: 0.5,
                      ease: "circInOut",
                    }}
                  >
                    <SkillBadge>
                      <SiJavascript />
                      <span>JavaScript (ES6+)</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiTypescript />
                      <span>TypeScript</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiReact />
                      <span>React</span>
                    </SkillBadge>
                    <SkillBadge>
                      <RiNextjsFill />
                      <span>Next.js</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiTailwindcss />
                      <span>Tailwind</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiHtml5 />
                      <span>HTML5</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiCss3 />
                      <span>CCS3</span>
                    </SkillBadge>
                    <SkillBadge>
                      <TbBrandThreejs />
                      <span>Three.js</span>
                    </SkillBadge>
                  </motion.div>
                )}
                {/* Backend skills */}
                {skillsTabIndex === 1 && (
                  <motion.div
                    key={skillsTabIndex}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 150, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-row p-3 pt-4 flex-wrap"
                    transition={{
                      duration: 0.5,
                      ease: "circInOut",
                    }}
                  >
                    <SkillBadge>
                      <SiExpress />
                      <span>Express.js</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiNodedotjs />
                      <span>Node.js</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiMongodb />
                      <span>MongoDB</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiPostgresql />
                      <span>PostgreSQL</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiPrisma />
                      <span>Prisma</span>
                    </SkillBadge>
                  </motion.div>
                )}
                {/* Tools skills */}
                {skillsTabIndex === 2 && (
                  <motion.div
                    key={skillsTabIndex}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 100, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-row p-3 pt-4 flex-wrap"
                    transition={{
                      duration: 0.5,
                      ease: "circInOut",
                    }}
                  >
                    <SkillBadge>
                      <SiJavascript />
                      <span>JavaScript</span>
                    </SkillBadge>
                    <SkillBadge>
                      <SiTypescript />
                      <span>TypeScript</span>
                    </SkillBadge>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
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
