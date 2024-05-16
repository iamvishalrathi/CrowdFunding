import React from "react";
import email from "../assets/email.svg";
import create from "../assets/create-campaign.svg";

const Footer = () => {
  return (
    <div className=" flex flex-row justify-center  items-center w-full bg-[#813da3] pt-2 gap-10 rounded-lg ">
      <div className=" bg-[#deddde] flex flex-col justify-center rounded-lg items-center p-5 m-12">
        <h1 className=" text-[32px] text-black items-center ">
          Get in touch with us
        </h1>
        <p className=" text-[16px] text-black items-center">
          Let's Forge the Path to Success Together.
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <div className=" bg-[#c56acd] flex flex-row justify-center items-center w-[200px] rounded-xl p-3">
          <div className="flex flex-col justify-center items-center">
            <img src={email} alt="email" className="h-[20px] items-center " />
            <h3>contactus@example.com</h3>
          </div>
        </div>
        <div className=" bg-[#c56acd] flex flex-row justify-center items-center w-[200px] rounded-xl p-3">
          <div className="flex flex-col justify-center items-center">
            <img src={create} alt="email" className="h-[20px] items-center " />
            <h3>Contact Form</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
