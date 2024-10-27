"use client";
import { cn } from "@/lib/utils";
import { FaLocationArrow } from "react-icons/fa6";

interface Props {
  img: string;
  title: string;
  icons: string[];
  link: string;
}

export function ProjectCard({ title, icons, link, img }: Props) {
  return (
    <div className="w-full min-w-full">
      <div
        className={cn(
          "group w-full cursor-pointer bg-black-200 overflow-hidden relative card h-fit rounded-md shadow-xl mx-auto flex flex-col justify-start p-4"
        )}
      >
        <div className="relative z-50 flex flex-col gap-4 pb-2">
          <img src={img} alt="" className="w-full h-60 object-cover object-top rounded-md" />
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative mb-4">{title}</h1>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {icons.map((icon) => (
                <img src={icon} className="w-5 h-5 object-contain rounded-sm" key={icon} />
              ))}
            </div>
            <a className="flex gap-1 items-center" href={link}>
              <p className="text-sm font-bold">View Site</p>
              <FaLocationArrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
