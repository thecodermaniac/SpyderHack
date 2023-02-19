import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" p-3 md:text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white w-screen flex items-center justify-around  bottom-0 sticky">
      <div className=" w-1/2 flex justify">
        <p className=" text-xs  flex items-center justify-center">
          Technologies Used to create this portfolio: NextJS{" "}
          {<TbBrandNextjs className=" hidden md:flex md:text-3xl mx-2" />},
          TailwindCSS{" "}
          {<SiTailwindcss className=" hidden md:flex md:text-3xl mx-2" />}
        </p>
      </div>
      <div>
        <p className=" text-xs flex items-center justify-center">
          Source Code:{" "}
          <a
            href="https://github.com/GopeshGoswami/NextJS-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className=" mx-2 text-3xl dark:hover:text-black transition-all duration-300 dark:text-white text-black hover:text-white" />
          </a>
        </p>
      </div>
    </div>
  );
}
