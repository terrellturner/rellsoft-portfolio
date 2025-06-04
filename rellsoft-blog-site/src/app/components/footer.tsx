import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 text-xs text-zinc-500 bg-stone-900 w-full flex flex-row justify-center mt-15">
      &copy; {new Date().getFullYear()} Terrell Turner
    </footer>
  );
};

export default Footer;
