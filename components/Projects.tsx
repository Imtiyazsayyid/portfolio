import React from "react";
import { ProjectCard } from "./ui/ProjectCard";

const data = [
  {
    id: 1,
    img: "/aliff.png",
    title: "Aliff Overseas Website",
    icons: ["vue.png", "js.png", "bootstrap.png", "node.png", "mysql3.png"],
    link: "https://aliff.in",
  },
  {
    id: 2,
    img: "/aliff-dashboard.png",
    title: "Aliff Overseas Dashboard",
    icons: ["vue.png", "js.png", "bootstrap.png", "node.png", "mysql3.png", "knex.png"],
    link: "https://app.aliff.in",
  },
  {
    id: 3,
    img: "/tktfox.png",
    title: "TKTFOX",
    icons: ["react.png", "js.png", "bootstrap.png", "node.png", "mysql3.png"],
    link: "https://tktfox.com",
  },
  {
    id: 4,
    img: "/n9.png",
    title: "N9VFX",
    icons: ["react.png", "js.png", "bootstrap.png"],
    link: "https://number9vfx.com/",
  },
  {
    id: 5,
    img: "/rms.png",
    title: "Corsymo",
    icons: ["vue.png", "js.png", "bootstrap.png", "node.png", "mysql3.png", "knex.png"],
    link: "https://dev.corsymo.com/",
  },

  {
    id: 6,
    img: "/founder.png",
    title: "Founder",
    icons: ["next.svg", "ts.svg", "tail.svg", "shadcn.png", "mysql3.png", "prisma.png"],
    link: "https://founder.imtiyazsayyid.in",
  },
];

const Projects = () => {
  const getExtraClassName = (id: number) => {
    return data.length % 2 === 1 && data.length === id ? "col-span-2" : "";
  };

  return (
    <div className="flex justify-center w-full bg-black-100 mt-10">
      <div className="w-full max-w-7xl mb-20">
        <h1 className="text-[40px] md:text-5xl font-bold relative z-50 text-center">
          Some Projects I&apos;ve Worked On
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 px-5 w-full">
          {data.map(({ id, icons, link, title, img }) => (
            <ProjectCard key={id} icons={icons} link={link} title={title} img={img} className={getExtraClassName(id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
