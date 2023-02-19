import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import codeLogo from "../images/codeLogo.png";
import { BsSearch } from "react-icons/bs";
import { HiOutlineTranslate } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [fix, setFix] = useState(false);
  const [showmobileNav, setShow] = useState(false);
  const toggleExpanded = () => setShow((current) => !current);
  const setFixed = () => {
    if (window.scrollY >= 20) {
      setFix(true);
      console.log(window.scrollY);
    } else setFix(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  });
  console.log(fix);
  return (
    // For Sticky, set the classes: sticky, top-0 left-0
    <nav className=" transition-all duration-1000 sticky top-0 left-0 z-20 backdrop-blur-lg">
      {/* Top Nav */}
      <div
        className={`  bg-transparent flex justify-around sticky w-full py-5   `}
      >
        {/* Logo */}
        <div>
          <img src={codeLogo} alt="Code Logo" className=" w-9 hidden md:flex" />
          {/* hamburger logo */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleExpanded}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
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
              <button className=" bg-[#1E40AF] px-4 py-1 ml-8 rounded-sm hidden sm:flex">
                Start Preparing Now!
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* mobile nav start */}
      <div
        class={`${showmobileNav ? "block" : "hidden"} absolute w-1/2`}
        id="navbar-default"
      >
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to={"/blog"}>
              <a
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Blogs
              </a>
            </Link>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Interview Prep
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Interview Experience
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Write for Us
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Opinion Pool
            </a>
          </li>
          <li>
            <button className=" bg-[#1E40AF] px-4 py-1 rounded-sm ">
              Start Preparing Now!
            </button>
          </li>
        </ul>
      </div>
      {/* mobile nav end */}
      {/* Top Nav Ends */}
      {/* Bottom Nav */}
      <div className={`${fix ? "hidden" : ""}`}>
        <ul

          className={`hidden sm:flex gap-12 items-center justify-center bg-[#EFF6FF] text-black py-2${
            fix ? "bg-transparent" : ""

          }`}
        >
          <Link to={"/blog"}>
            <li>Blogs</li>
          </Link>
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
