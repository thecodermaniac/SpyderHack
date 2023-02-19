import React from "react";

const FirstFooter = () => {
  return (
    <div className=" flex justify-between flex-col md:flex-row ">
      {/* Left Side */}
      <aside className=" text-black">
        <h1 className=" text-3xl font-semibold mb-3">Share you knowledge</h1>
        <h1 className=" text-3xl font-semibold mb-6">Write for PepHub.</h1>
        <p className=" mb-4">
          Write blogs for us, share your knowledge & experience. <br /> Help
          thousands like you prepare better for their goals.
        </p>
        <button className=" bg-[#1E40AF] px-4 py-1 text-white mt-6 rounded-sm">
          Start writing now!
        </button>
      </aside>
      {/* RIght Side */}
      <aside className=" text-black flex items-start flex-col md:w-1/2 text-left mt-10 md:mt-0">
        <h2 className=" text-xl font-semibold mb-3">Topics you can write on</h2>
        <button className=" px-3 py-2 bg-[#F9FAFB] w-[100vw] md:w-[80%] hover:bg-[#dadada] transition-all ease-in-out mb-5 text-start md:ml-3">
          Cognizant Digital Nurture Technical Interview Experience
        </button>
        <button className=" px-3 py-2 bg-[#F9FAFB] w-[100vw] md:w-[80%] hover:bg-[#dadada] transition-all ease-in-out mb-5 text-start md:ml-3">
          Cognizant Digital Nurture HR Interview Experience
        </button>
        <button className=" px-3 py-2 bg-[#F9FAFB] w-[100vw] md:w-[80%] hover:bg-[#dadada] transition-all ease-in-out mb-5 text-start md:ml-3">
          TCS Digital Technical Interview Experience
        </button>
        <button className=" px-3 py-2 bg-[#F9FAFB] w-[100vw] md:w-[80%] hover:bg-[#dadada] transition-all ease-in-out mb-5 text-start md:ml-3">
          TCS Ninja Technical Interview Experience
        </button>
      </aside>
    </div>
  );
};

export default FirstFooter;
