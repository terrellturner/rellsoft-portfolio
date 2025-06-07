"use client";

import Link from "next/link";
import React, { Suspense, useState } from "react";
import { motion } from "motion/react";
import { usePathname, useSearchParams } from "next/navigation";
import RellSoftLogo from "./rellsoft-logo";

const Header = () => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const pathname = usePathname();

  //https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

  function DesktopNavLinks() {
    const searchParams = useSearchParams();

    return (
      <ul className="hidden md:flex transition-colors flex-row items-center space-x-4 tracking-tight text-2xl uppercase font-bold">
        <li
          className={`transition-colors duration-250 hover:text-rellsoft-orange hover:dark:text-zinc-100 ${
            pathname === "/" ?
              `text-rellsoft-orange dark:text-zinc-100`
            : "text-stone-700 dark:text-rellsoft-green"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`transition-colors duration-250 hover:text-rellsoft-orange hover:dark:text-zinc-100 ${
            pathname.includes("/blog") && !searchParams.get("category") ?
              `text-rellsoft-orange dark:text-zinc-100`
            : "text-stone-700 dark:text-rellsoft-green"
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={`transition-colors duration-250 hover:text-rellsoft-orange hover:dark:text-zinc-100 ${
            searchParams.get("category") === "projects" ?
              `text-rellsoft-orange dark:text-zinc-100`
            : "text-stone-700 dark:text-rellsoft-green"
          }`}
        >
          <Link href="/blog?category=projects">Projects</Link>
        </li>
        <li
          className={`text-stone-800 dark:text-rellsoft-green transition-colors duration-250 hover:text-rellsoft-orange hover:dark:text-zinc-100`}
        >
          <Link href="./resume.pdf" target="_blank" rel="noreferrer noopener">
            Resume
          </Link>
        </li>
      </ul>
    );
  }

  function MobileNavLinks() {
    const searchParams = useSearchParams();
    return (
      <ul className="flex flex-col text-stone-800 dark:text-rellsoft-green font-extrabold mt-40 space-y-3 p-4 text-4xl uppercase tracking-tight">
        <li>
          <Link
            onClick={() => {
              setMobileNavToggle(false);
            }}
            className={`${
              pathname === "/" ?
                `text-rellsoft-orange dark:text-zinc-100`
              : "text-stone-700 dark:text-rellsoft-green"
            }`}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMobileNavToggle(false);
            }}
            className={`${
              pathname.includes("/blog") && !searchParams.get("category") ?
                `text-rellsoft-orange dark:text-zinc-100`
              : "text-stone-700 dark:text-rellsoft-green"
            }`}
            href={"/blog"}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMobileNavToggle(false);
            }}
            className={`${
              searchParams.get("category") === "projects" ?
                `text-rellsoft-orange dark:text-zinc-100`
              : "text-stone-700 dark:text-rellsoft-green"
            }`}
            href={"/blog?category=projects"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMobileNavToggle(false);
            }}
            className={`${`text-stone-700 dark:text-rellsoft-green`}`}
            href={"mailto:terrell@rellsoft.dev"}
            target="_blank"
            rel="noreferrer noopener"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={`${`text-stone-700 dark:text-rellsoft-green`}`}
            href="./resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Link>
        </li>
      </ul>
    );
  }

  const mobileNavMotionVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  };

  const mobileNavOpacityVariant = {
    open: { opacity: 0.5, x: 0 },
    closed: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <header className="md:p-2 mb-15 md:border-b border-b-zinc-800 bg-none border-none md:bg-zinc-200 w-full flex flex-row justify-between items-center px-5">
      <nav className="h-full flex flex-row justify-between w-full">
        <Link className="h-18 flex justify-center" href="/">
          <RellSoftLogo
            animationLength={1}
            initialAnimation={1}
            classNames="w-2/3 h-full stroke-30 stroke-rellsoft-orange dark:stroke-rellsoft-green hidden md:flex"
          />
        </Link>
        <Suspense>
          <DesktopNavLinks />
        </Suspense>
      </nav>

      {/* Mobile Nav Button */}
      <div
        className={`flex flex-col md:hidden aspect-square h-12 space-y-2.5 justify-center z-60 transition-all ${mobileNavToggle ? `relative` : ``}`}
        onClick={() => setMobileNavToggle(!mobileNavToggle)}
      >
        <span
          className={`w-full h-1 origin-center bg-rellsoft-orange dark:bg-rellsoft-green duration-300 ${
            mobileNavToggle ? `left-0 rotate-45 absolute m-0` : ``
          }`}
        ></span>
        <span
          className={`w-full h-1 bg-rellsoft-orange dark:bg-rellsoft-green duration-300 ${
            mobileNavToggle ? `my-0 hidden` : ``
          }`}
        ></span>
        <span
          className={`w-full h-1 origin-center bg-rellsoft-orange dark:bg-rellsoft-green duration-300 ${
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
        <Suspense>
          <MobileNavLinks />
        </Suspense>
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
