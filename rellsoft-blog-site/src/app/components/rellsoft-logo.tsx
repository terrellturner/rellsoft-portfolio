"use client";

import React from "react";
import { motion } from "motion/react";

interface RellSoftLogoProps {
  classNames: string;
  animationLength: number;
  initialAnimation: number;
}

const RellSoftLogo = ({
  classNames,
  animationLength = 1,
  initialAnimation,
}: RellSoftLogoProps) => {
  return (
    <div className={`aspect-square transition-transform ${classNames}`}>
      <svg
        viewBox="0 0 932.41547 997.18066"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full"
      >
        <motion.path
          initial={{ pathLength: initialAnimation }}
          animate={{ pathLength: animationLength }}
          transition={{ duration: 5 }}
          id="path3"
          d="m 817.86552,560.67545 -0.36566,-135.97617 m -237.66,-209.217 -151.84,-71.698 209.6,-88.444997 m 179.9,369.359997 108.31,-45.569 m -606.85434,-53.65 0.0116,522.99 m 108.94284,-471.8286 -108.95444,-51.1614 v 0 l -102.56566,42.7514 m -107.28,-90.664 209.905,-87.8197 498.475,234.9523 M 6.2798687,229.58668 l 102.8099913,48.016 -0.0429,135.68 M 6.3769687,364.64568 6.3023087,229.31568 534.7323,6.8956824 l 102.89,48.4370006 0.28568,135.615167 -58.044,24.533 345.97,163.62 0.27306,135.45 -108.24152,46.1246 -89.90148,-42.2056 0.0377,426.38 -108.36,45.437 -102.67,-48.35917 v -523.18 l -89.069,-42.12 0.007,425.76 -108.95,46.04 -102.58,-48.464 v -431.72 l -107.35,45.037 z m 613.2647713,625.376 0.35112,-522.7694 107.97118,51.21757"
        />
      </svg>
    </div>
  );
};

export default RellSoftLogo;
