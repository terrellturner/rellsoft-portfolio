import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const WordEmphasis = ({ children }: Props, classNames?: string) => {
  return (
    <>
      {" "}
      <div
        className={`inline font-bold decoration-2 underline decoration-rellsoft-orange dark:decoration-rellsoft-green hover:decoration-zinc-300 transition-color duration-700 ${classNames}`}
      >
        {children}
      </div>
    </>
  );
};

export default WordEmphasis;
