import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Skills = () => {
  const skills1 = [
    { img: "/next.svg", link: "https://nextjs.org" },
    { img: "/react.png", link: "https://react.dev" },
    { img: "/vue.png", link: "https://vuejs.org" },
    { img: "/node.png", link: "https://nodejs.org" },
    { img: "/mysql.png", link: "https://www.mysql.com" },
    { img: "/prisma.png", link: "https://www.prisma.io" },
    { img: "/knex.png", link: "https://knexjs.org" },
    { img: "/express.png", link: "https://expressjs.com" },
    { img: "/tail.svg", link: "https://tailwindcss.com" },
  ];

  const skills2 = [
    { img: "/shadcn.png", link: "https://ui.shadcn.com/docs" },
    { img: "/bootstrap.png", link: "https://getbootstrap.com" },
    { img: "/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { img: "/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { img: "/js.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { img: "/ts.svg", link: "https://www.typescriptlang.org" },
    { img: "/py.png", link: "https://www.python.org" },
    { img: "/git.png", link: "https://git-scm.com" },
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
