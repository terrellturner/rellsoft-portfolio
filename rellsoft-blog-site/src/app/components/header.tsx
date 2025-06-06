"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import RellSoftLogo from "./rellsoft-logo";

const Header = () => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const [queryString, setQueryString] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams) {
      setQueryString(searchParams.toString());
    }
  }, [searchParams, queryString]);

  const mobileNavMotionVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  };

  const mobileNavOpacityVariant = {
    open: { opacity: 0.5, x: 0 },
    closed: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <header className="p-2 border-b border-b-zinc-800 bg-zinc-200 dark:bg-stone-900 w-full flex flex-row justify-between h-20 mb-15 items-center px-5">
      <nav className="h-full flex flex-row justify-between w-full">
        <Link className="h-full" href="/">
          <RellSoftLogo
            classNames="h-full stroke-30 stroke-rellsoft-green-muted dark:stroke-rellsoft-green"
            initialAnimation={1}
            animationLength={1}
          />
        </Link>
        <ul className="hidden md:flex flex-row items-center space-x-4 tracking-tight text-2xl uppercase text-rellsoft-green font-bold">
          <li
            className={`text-rellsoft-green-muted dark:text-rellsoft-green transition-colors duration-250 hover:text-zinc-100 ${
              pathname === "/" ? `text-zinc-100` : " "
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-rellsoft-green-muted dark:text-rellsoft-green transition-colors duration-250 hover:text-zinc-100 ${
              pathname + queryString === "/blog" ? `text-zinc-100` : " "
            }`}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={`text-rellsoft-green-muted dark:text-rellsoft-green transition-colors duration-250 hover:text-zinc-100 ${
              pathname + "?" + queryString === "/blog?category=projects" ?
                `text-zinc-100`
              : " "
            }`}
          >
            <Link href="/blog?category=projects">Projects</Link>
          </li>
          <li
            className={`text-rellsoft-green-muted dark:text-rellsoft-green transition-colors duration-250 hover:text-zinc-100`}
          >
            <Link href="/">Resume</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav Button */}
      <div
        className={`flex flex-col md:hidden aspect-square h-12 space-y-2.5 justify-center z-60 transition-all ${mobileNavToggle ? `relative` : ``}`}
        onClick={() => setMobileNavToggle(!mobileNavToggle)}
      >
        <span
          className={`w-full h-1 origin-center bg-rellsoft-green-muted dark:bg-rellsoft-green duration-300 ${
            mobileNavToggle ? `left-0 rotate-45 absolute m-0` : ``
          }`}
        ></span>
        <span
          className={`w-full h-1 bg-rellsoft-green-muted dark:bg-rellsoft-green duration-300 ${
            mobileNavToggle ? `my-0 hidden` : ``
          }`}
        ></span>
        <span
          className={`w-full h-1 origin-center bg-rellsoft-green-muted dark:bg-rellsoft-green duration-300 ${
            mobileNavToggle ? `left-0 -rotate-45 absolute m-0` : ``
          }`}
        ></span>
      </div>
      {/* Desktop Nav */}

      {/* Mobile Nav */}
      <motion.nav
        variants={mobileNavMotionVariants}
        initial="closed"
        animate={mobileNavToggle ? "open" : "closed"}
        className="flex flex-col fixed h-full w-screen bg-stone-200 dark:bg-stone-950 left-32 right-0 top-0 z-50"
      >
        <ul className="flex flex-col text-rellsoft-green-muted dark:text-rellsoft-green font-extrabold mt-40 space-y-3 p-4 text-4xl uppercase tracking-tight">
          <li>
            <Link href={"/blog"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/blog"}>Projects</Link>
          </li>
          <li>
            <Link href={"/blog"}>Contact</Link>
          </li>
          <li>
            <Link href={"/blog"}>Resume</Link>
          </li>
        </ul>
      </motion.nav>
      <motion.div
        variants={mobileNavOpacityVariant}
        animate={mobileNavToggle ? "open" : "closed"}
        initial="closed"
        className={`fixed right-0 top-0 z-40 bg-stone-950 h-full w-screen opacity-95 ${
          mobileNavToggle ? `` : `hidden`
        }`}
      ></motion.div>
    </header>
  );
};

export default Header;
