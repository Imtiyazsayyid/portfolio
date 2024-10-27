import React from "react";
import { Spotlight } from "./ui/Spotlight";

interface Props {
  showLights?: boolean;
  extraClasses?: string;
}
const LightAndGrid = ({ showLights = false, extraClasses }: Props) => {
  return (
    <div className={`w-[100vw] absolute -z-1 bg-black-100 ${extraClasses}`}>
      {showLights && (
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
      )}
      <div
        className={`w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] relative flex items-center justify-center h-[100vh]`}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></div>
      </div>
    </div>
  );
};

export default LightAndGrid;
