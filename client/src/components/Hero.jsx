import React from "react";
import Logo from "../images/logo.svg";
import HeroSectionImage from "../images/heroSectionImg.svg";
import HeroBG from "../images/heroBG.png";

const Hero = () => {
  return (
    <div className=" bg-white mt-10">
      <img
        src={HeroBG}
        alt=""
        className=" md:absolute lg:top-5 hidden md:flex"
      />
      <div className=" flex items-center justify-center flex-col">
        <img
          src={Logo}
          alt="PepHub"
          className=" lg:w-[70vh] md:w-[50vh] w-[30vh]"
        />
        <h1 className="text-[#3B82F6] sm:text-lg md:text-xl lg:text-2xl font-semibold text-center mt-3">
          Your Preparation for your SDE Role <br /> Better & Easier than ever.
        </h1>
        <img src={HeroSectionImage} alt="" />
      </div>
      {/* <h1 className=" border-red-500 border-[200px]">Hello</h1> */}
    </div>
  );
};

export default Hero;
