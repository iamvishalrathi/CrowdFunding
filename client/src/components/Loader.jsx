import React from "react";
import { loader } from "../assets";

const Loader = () => {
  return (
    <div className=" fixed inset-0 z-10 h-screen bg-black flex items-center justify-center flex-col ">
      <img
        src={loader}
        alt="loading"
        className=" w-[100px] h-[100px] object-contain "
      />
      <p className=" mt-5 font-epilogue font-bold text-[20px] text-white text-center ">
        Transaction is in progress <br />
        Please wait......
      </p>
    </div>
  );
};

export default Loader;
