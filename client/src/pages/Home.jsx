import React from "react";
import Logo from "../images/logo.svg";

const Home = () => {
  return (
    <div>
      <div className=" flex items-center justify-center mt-10">
        <img
          src={Logo}
          alt="PepHub"
          className=" lg:w-[70vh] md:w-[50vh] sm:w-[30vh]"
        />
      </div>
    </div>
  );
};

export default Home;
