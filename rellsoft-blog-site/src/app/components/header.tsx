"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

const Header = () => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  const mobileNavMotionVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  };

  const mobileNavOpacityVariant = {
    open: { opacity: 0.5, x: 0 },
    closed: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <header className="p-2 bg-stone-900 w-full flex flex-row justify-between h-20 mb-15 items-center px-5">
      <Link className="h-full" href="/">
        <img
          className="h-full p-2"
          alt="The RellSoft logo"
          src={"/images/logo-svg.svg"}
        ></img>
      </Link>
      <div
        className="flex flex-col md:hidden aspect-square h-12 space-y-2.5 justify-center z-60"
        onClick={() => setMobileNavToggle(!mobileNavToggle)}
      >
        <span
          className={`w-full h-1 origin-center bg-rellsoft-green transition-transform duration-300 ${mobileNavToggle ? `translate-y-[0.40rem] rotate-45` : ``}`}
        ></span>
        <span
          className={`w-full h-1 bg-rellsoft-green transition-all duration-300 ${mobileNavToggle ? `my-0 hidden` : ``}`}
        ></span>
        <span
          className={`w-full h-1 origin-center bg-rellsoft-green transition-transform duration-300 ${mobileNavToggle ? `-translate-y-[0.40rem] -rotate-45` : ``}`}
        ></span>
      </div>
      {/* Mobile Nav */}
      <motion.nav
        variants={mobileNavMotionVariants}
        initial="closed"
        animate={mobileNavToggle ? "open" : "closed"}
        className="flex flex-col fixed h-full w-screen bg-stone-950 left-32 right-0 top-0 z-50"
      >
        <ul className="flex flex-col text-rellsoft-green font-extrabold mt-40 space-y-3 p-4 text-4xl uppercase tracking-tight">
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
        className={`fixed right-0 top-0 z-40 bg-stone-950 h-full w-screen opacity-95 ${mobileNavToggle ? `` : `hidden`}`}
      ></motion.div>
    </header>
  );
};

export default Header;
