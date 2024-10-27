import React from "react";
import { ProjectCard } from "./ui/ProjectCard";

const data = [
  {
    id: 1,
    img: "/aliff.png",
    title: "Aliff Overseas",
    icons: ["vue.png", "js.png", "bootstrap.png", "node.png", "mysql3.png"],
    link: "aliff.in",
  },
  {
    id: 2,
    img: "/tktfox.png",
    title: "TKTFOX",
    icons: ["react.png", "js.png", "bootstrap.png", "node.png", "mysql3.png"],
    link: "tktfox.com",
  },
  {
    id: 3,
    img: "/n9.png",
    title: "N9VFX",
    icons: ["react.png", "js.png", "bootstrap.png"],
    link: "n9vfx.com",
  },
  {
    id: 4,
    img: "/founder.png",
    title: "Founder",
    icons: ["next.svg", "ts.svg", "tail.svg", "shadcn.png"],
    link: "founder.imtiyazsayyid.in",
  },
];

const Projects = () => {
  return (
    <div className="flex justify-center w-full bg-black-100 mt-10">
      <div className="w-full max-w-7xl mb-20">
        <h1 className="text-[40px] md:text-5xl font-bold relative z-50 text-center">
          Some Projects I&apos;ve Worked On
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 px-5 w-full">
          {data.map(({ id, icons, link, title, img }) => (
            <ProjectCard key={id} icons={icons} link={link} title={title} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
