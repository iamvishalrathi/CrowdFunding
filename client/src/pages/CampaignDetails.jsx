import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";
import Custombuttom from "../components/Custom_Buttom";
import CountBox from "../components/CountBox";

const CampaignDetails = () => {
  const { state } = useLocation();
  const { getDonations, contract, address } = useStateContext();
  const [isLoading, setisLoading] = useState(false);
  const [amount, setamount] = useState("");
  const [donators, setdonators] = useState([]);
  const remainingDays = daysLeft(state.deadline);

  return (
    <div>
      {isLoading && "isLoading"}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className=" w-full h-[500px] object-contian rounded-xl"
          />
          <div className="relative w-full h-[10px] bg-[#3a3a43] ">
            <div
              className=" absolute h-full bg-[#4acd8d]  "
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px] ">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            title={`Raised of ${state.target}`}
            value={state.amountCollected}
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-10 ">
        <div>
          <h4 className="font-epilogue font-semibold text-[30px] text-white p-3 uppercase">
            Creator
          </h4>
          <div className="mt-[20px] flex flex-row items-center flex-wrap gap-4 ">
            <div className=" w-[52px] h-[52px] rounded-full flex items-center justify-center bg-black  ">
              <img
                src={thirdweb}
                alt="user"
                className=" w-[60%] h-[60%] object-contain"
              />
            </div>
            <h4 className="flex-1 font-epilogue font-semibold text-[12px] text-[#ffffff] break-all ">
              {state.owner}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
