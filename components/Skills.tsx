import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Skills = () => {
  const skills1 = [
    "/next.svg",
    "/react.png",
    "/vue.png",
    "/node.png",
    "/mysql.png",
    "/prisma.png",
    "/knex.png",
    "/express.png",
    "/tail.svg",
  ];
  const skills2 = [
    "/shadcn.png",
    "/bootstrap.png",
    "/html.png",
    "/css.png",
    "/js.png",
    "/ts.svg",
    "/py.png",
    "/git.png",
  ];

  return (
    <div className="flex justify-center py-32 pt-16">
      <div className="max-w-7xl">
        <h1 className="text-[40px] md:text-5xl font-bold text-center mb-20">My Skills</h1>
        <div>
          <InfiniteMovingCards items={skills1} direction="right" speed="normal" />
        </div>
        <div>
          <InfiniteMovingCards items={skills2} direction="left" speed="normal" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
