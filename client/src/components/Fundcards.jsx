import React from "react";
import { tagType, thirdweb } from "../assets";
import { daysLeft } from "../utils";

const Fundcards = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleclick,
}) => {
  const remainingDays = daysLeft(deadline);
  let i = 0;

  return (
    <div
      key={++i}
      className=" sm:w-[250px] w-full rounded-[15px] bg-[#03254E] "
      onClick={handleclick}
    >
      <img
        src={image}
        alt="fund"
        className=" w-full h-[158px] object-cover rounded-[15px] "
      />
      <div
        className=" flex
       flex-col p-4 "
      >
        <div className="flex flex-row items-center mb-[18px]">
          <img
            src={tagType}
            alt="tag"
            className=" w-[17px] h-[17px] object-contain "
          />
          <p className=" ml-2 font-epilogue font-medium text-[12px] text-[#000000] ">
            Campaign
          </p>
        </div>
        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-6 truncate  ">
            {title}
          </h3>
          <p className=" mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-6 truncate ">
            {description}
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-2 mt-[15px]">
          <div className="flex flex-col">
            <h4 className=" font-epilogue font-semibold text-[14px] text-[#000000] leading-6 ">
              {amountCollected}
            </h4>
            <p className="mt-1 font-epilogue leading-5 text-[#000000] sm:max-w-[120px] truncate ">
              Raised of {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className=" font-epilogue font-semibold text-[14px] text-[#000000] leading-6 ">
              {remainingDays}
            </h4>
            <p className="mt-1 font-epilogue leading-5 text-[#000000] sm:max-w-[120px] truncate ">
              Days Left
            </p>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-3">
          <div className=" w-[30px] h-[30px] rounded-full flex items-center justify-center bg-black  ">
            <img
              src={thirdweb}
              alt="user"
              className=" w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#b2b3bd] truncate ">
            by <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fundcards;
