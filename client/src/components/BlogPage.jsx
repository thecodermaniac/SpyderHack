import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-row m-7 flex-wrap">
      <div className="flex flex-col w-[75%] mr-6">
        <h1 className=" text-black text-2xl underline md:underline-offset-[10px] underline-offset-[7px] mt-6">
          Latest Blogs
        </h1>
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 mt-6"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/hero-side.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#1E3A8A] dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim sint deserunt nihil ab similique itaque ad consequatur, eveniet omnis cupiditate ipsam impedit molestiae odio doloremque tempora sequi ipsa et!
            </p>
          </div>
        </a>
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 mt-6"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/hero-side.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#1E3A8A] dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim sint deserunt nihil ab similique itaque ad consequatur, eveniet omnis cupiditate ipsam impedit molestiae odio doloremque tempora sequi ipsa et!
            </p>
          </div>
        </a>
      </div>
      <div className="flex flex-col sm:w-[25%] w[100%]">
        <h1 className="text-black text-xl m-4 "> Trending</h1>
        <div className="flex flex-row justify-between bg-gray-300 h-7 mt-6 border-gray-200 rounded-lg">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">lorem</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            75 latest post
          </p>
        </div>
        <div className="flex flex-row justify-between bg-gray-300 h-7 mt-6 border-gray-200 rounded-lg">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">lorem</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            75 latest post
          </p>
        </div>
        <div className="flex flex-row justify-between bg-gray-300  mt-6 border-gray-200 rounded-lg">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">lorem</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            75 latest post
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
