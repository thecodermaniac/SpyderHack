import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import codeLogo from "../images/codeLogo.png";
import { BsSearch } from "react-icons/bs";
import { HiOutlineTranslate } from "react-icons/hi";

export default function Navbar(props) {
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 20) {
      setFix(true);
      console.log(window.scrollY);
    } else setFix(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  });
  return (
    // For Sticky, set the classes: sticky, top-0 left-0
    <nav>
      {/* Top Nav */}
      <div
        className={` transition-all duration-1000 bg-white flex justify-around sticky w-full top-0 left-0 z-20 backdrop-blur-sm ${
          fix
            ? // #ffffff73
              " ease-in-out py-5 md:py-10 bg-gradient-to-t from-transparent to-teal-500 dark:to-teal-600"
            : " py-3 md:py-3"
        }`}
      >
        {/* Logo */}
        <div>
          <img src={codeLogo} alt="Code Logo" className=" w-9" />
        </div>
        {/* Main Nav */}
        <div>
          <ul className=" flex items-center">
            <li>
              {props.darkMode ? (
                <BsFillSunFill
                  onClick={() => {
                    props.setDarkMode(!props.darkMode);
                  }}
                  className=" cursor-pointer text-2xl mr-10 text-[#1E40AF]"
                />
              ) : (
                <BsFillMoonStarsFill
                  onClick={() => {
                    props.setDarkMode(!props.darkMode);
                  }}
                  className=" cursor-pointer text-xl mr-10 text-[#1E40AF]"
                />
              )}
            </li>
            <li>
              <BsSearch className="cursor-pointer text-xl mr-10 text-[#1E40AF]" />
            </li>
            <li>
              <HiOutlineTranslate className="cursor-pointer text-xl mr-10 text-[#1E40AF]" />
            </li>
            <li>
              <button className=" bg-[#1E40AF] px-4 py-1 ml-8 rounded-sm">
                Start Preparing Now!
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Top Nav Ends */}
      {/* Bottom Nav */}
      <div>
        <ul className=" flex gap-12 items-center justify-center bg-[#EFF6FF] text-black py-2">
          <li>Blogs</li>
          <li>Interview Prep</li>
          <li>Interview Experience</li>
          <li>Write for Us</li>
          <li>About Us</li>
          <li>Opinion Pool</li>
        </ul>
      </div>
    </nav>
  );
}
