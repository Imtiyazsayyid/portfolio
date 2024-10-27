import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex justify-center pb-40 px-20">
      <div className="w-full max-w-7xl relative z-50 flex flex-col items-center">
        <h1 className="text-center font-bold text-2xl md:text-5xl mb-5 md:px-40">
          Excited to build something to boost your online presence?
        </h1>
        <p className="text-center mb-5">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:imtiyazsayyidwork@gmail.com">
          <MagicButton title="Let's Get In Touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
