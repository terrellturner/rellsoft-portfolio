import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const SkillBadge = ({ children }: Props) => {
  return (
    <>
      {" "}
      <div
        className={`m-1 h-12 hover:text-stone-50 dark:hover:text-stone-900 rounded-l-full w-auto whitespace-nowrap rounded-r-full bg-stone-50 border-rellsoft-orange dark:bg-stone-800 p-2 px-4 border dark:border-rellsoft-green flex flex-row items-center space-x-1 text-stone-700 dark:text-rellsoft-green font-medium group hover:border-stone-50 dark:hover:border-rellsoft-green hover:bg-rellsoft-orange dark:hover:bg-rellsoft-green duration-300 ease-in-out transition-all cursor-default`}
      >
        {children}
      </div>
    </>
  );
};

export default SkillBadge;
