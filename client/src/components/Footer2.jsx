import React from "react";
import FooterBG from "../images/FooterBackground.png";
import Insta from "../images/socials/insta.png";
import Linkedin from "../images/socials/linkedin-app.png";
import Facebook from "../images/socials/facebook.png";

const Footer2 = () => {
  return (
    <div>
      <img
        src={FooterBG}
        alt=""
        className=" -z-50 absolute w-screen left-0 h-1/2"
      />
      <div className=" flex justify-between ">
        <aside className=" text-white absolute">
          <h1 className=" text-3xl font-bold">SDE Prep</h1>
          <div className=" flex mt-10 gap-5">
            <img src={Insta} alt="" className=" w-6" />
            <img src={Linkedin} alt="" className=" w-6" />
            <img src={Facebook} alt="" className=" w-6" />
          </div>
          <h1 className=" mt-7">join our newsletter for daily updates!</h1>
          <div className=" mt-5 flex gap-2">
            <input type="text" className=" w-full" />
            <button className=" px-3 py-1 bg-[#1E40AF]">Subscribe</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Footer2;
