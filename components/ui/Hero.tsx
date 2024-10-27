import React from "react";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex justify-center pt-56 pb-56 px-5 border">
      <div className="flex flex-col items-center max-w-7xl">
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 z-50">
          Crafting Seamless User Journeys
        </h2>
        <div className="md:w-2/3">
          <TextGenerateEffect
            className="text-center text-[40px] lg:text-6xl"
            words="From Backend Logic to Frontend Magic"
          />
        </div>

        <p className="text-center md:tracking-wider mb-8 md:mb-0 text-sm md:text-lg lg:text-2xl z-50">
          Hi I&apos;m Imtiyaz, A Full Stack Developer based in Mumbai, India.
        </p>

        {/* <a href="#about">
          <MagicButton title="View My Work" icon={<FaLocationArrow />} position="right" />
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
