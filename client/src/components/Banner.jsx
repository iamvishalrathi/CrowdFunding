import React from "react";
import banner from "../assets/banner.png";
import funding from "../assets/Funding.jpg";
import InfoCard from "./InfoCard";
import blokchain from "../assets/blockchain.svg";
import security from "../assets/security.svg";
import trans from "../assets/trans.svg";
import trust from "../assets/trust.svg";
import { logo } from "../assets";

const Banner = () => {
  return (
    <div className="flex flex-col my-[30px] bannerimg">
      {/* <img
        src={banner}
        alt="Image description"
        className="w-full h-screen blur-sm "
      /> */}
      <div className=" text-white bg-black bg-opacity-30 p-4 flex justify-center rounded-lg items-center">
        <h2 className=" text-[32px] font-semibold text-center align-middle">
          Can't donate much? No worries at all!
          <br /> Every little bit helps us stand tall!
        </h2>
        <img
          src={logo}
          alt=""
          className=" m-12 w-[400px] h-[300px] bg-blend-color-burn rounded-lg"
        />
      </div>
      <h1 className=" text-[32px] font-semibold text-center align-middle py-3">
        Why Raise Funds With Us??
      </h1>
      <div className=" text-white p-1 w-full flex justify-between items-center">
        <InfoCard
          image={blokchain}
          heading="Blockchain"
          text="Experience the future of Crowdfunding. We're built on blockchain."
        />
        <InfoCard
          image={security}
          heading="Security"
          text="Built to withstand even the toughest threats. Your security is our priority."
        />
        <InfoCard
          image={trans}
          heading="Transparency"
          text="Your trust is our foundation. Experience true transparency with CrowdFunding."
        />
        <InfoCard
          image={trust}
          heading="Trust"
          text="Forge a stronger connection. Experience the trust factor with Us"
        />
      </div>
    </div>
  );
};

export default Banner;
