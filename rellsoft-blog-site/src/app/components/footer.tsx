import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 border-t border-t-zinc-800 text-xs text-stone-500 dark:text-zinc-500 bg-zinc-300 dark:bg-stone-900 w-full flex flex-row justify-center">
      &copy; {new Date().getFullYear()} Terrell Turner
    </footer>
  );
};

export default Footer;
