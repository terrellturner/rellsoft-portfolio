import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const SkillBadge = ({ children }: Props) => {
  return (
    <>
      {" "}
      <div
        className={`m-1 h-12 transition-all rounded-l-full w-auto whitespace-nowrap rounded-r-full bg-stone-800 p-2 px-4 border border-rellsoft-green flex flex-row items-center space-x-1 text-rellsoft-green font-medium first:hover:text-stone-300`}
      >
        {children}
      </div>
    </>
  );
};

export default SkillBadge;
