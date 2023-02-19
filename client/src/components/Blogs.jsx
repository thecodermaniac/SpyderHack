import React from "react";
import "../components/Card";
import Card from "../components/Card";

const Blogs = () => {
  return (
    <div className=" ml-5 md:ml-20">
      <h1 className=" text-black text-3xl font-semibold underline md:underline-offset-[10px] underline-offset-[7px]">
        Latest Blogs
      </h1>
      {/* Cards */}
      <div className=" flex flex-col gap-10 m-10 py-10 md:flex-row lg:flex-row lg:flex-wrap">
        <Card />
        <Card />
        <Card />


      </div>
    </div>
  );
};

export default Blogs;
