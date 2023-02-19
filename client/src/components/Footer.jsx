import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import FirstFooter from "./FirstFooter";
import Footer2 from "./Footer2";

export default function Footer() {
  return (
    <div className=" ml-5 md:ml-20">
      <FirstFooter />
      <Footer2 />
    </div>
  );
}
