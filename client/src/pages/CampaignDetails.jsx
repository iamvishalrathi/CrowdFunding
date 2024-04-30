import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";
import Custombuttom from "../components/Custom_Buttom";
import CountBox from "../components/CountBox";
import { BigNumber } from "bignumber.js";
import Loader from "../components/Loader";

const CampaignDetails = () => {
  const { state } = useLocation();
  const { donate, getDonations, contract, address } = useStateContext();
  const [isLoading, setisLoading] = useState(false);
  const [amount, setamount] = useState("");
  const [donators, setDonators] = useState([]);
  const remainingDays = daysLeft(state.deadline);
  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setisLoading(true);
    await donate(state.pId, amount);
    setisLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader />}
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
            value={state.amountCollected.toString()}
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-10 ">
        <div>
          <h4 className="font-epilogue font-semibold text-[30px] text-white p-3 uppercase">
            Creator
          </h4>
          <div className="mt-[20px] flex p-2 rounded-xl flex-row items-center flex-wrap gap-4 ">
            <div className=" w-[52px] h-[52px] rounded-full flex items-center justify-center bg-black  ">
              <img
                src={thirdweb}
                alt="user"
                className=" w-[60%] h-[60%] object-contain"
              />
            </div>
            <h4 className="flex-1 font-epilogue font-semibold text-[20px] text-[#ffffff] break-all ">
              {state.owner}
            </h4>
          </div>
        </div>
        <div className="flex-[2] flex flex-col gap-10 ">
          <div>
            <h4 className="font-epilogue p-3 font-semibold text-[30px] text-white uppercase">
              Description
            </h4>
            <div className=" flex p-3 rounded-xl flex-row items-center flex-wrap gap-4 ">
              <p className="flex-1 font-epilogue font-semibold text-[16px] text-[#ffffff] ">
                {state.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[2] flex flex-col gap-10 ">
          <div>
            <h4 className="font-epilogue p-3 font-semibold text-[30px] text-white uppercase">
              DONATORS
            </h4>
            <div className=" flex flex-col gap-4 ">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`}>
                    <p className="font-epilogue p-3 font-semibold text-[16px] text-white break-11 ">
                      {index + 1}. {item.donator}{" "}
                    </p>
                  </div>
                ))
              ) : (
                <p className="flex-1 font-epilogue p-3 font-semibold text-[16px] text-[#ffffff] ">
                  No Donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-epilogue p-3 font-semibold text-[30px] text-white uppercase">
            FUNDS
          </h4>
          <div className="my-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px] ">
            <p className="flex-1 my-4 font-epilogue font-semibold text-[32px] text-[#756f6f] leading-8 text-center ">
              FUND The Campaign
            </p>
            <div className="mt-[30px">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.0001"
                className="w-full py-3 sm:px-5 outline-none border-[1px] border-[#3a3a43] bg-transparent font- epilogue text-white text-[18px] leading-8 placehlder:text-[#4b5264] rounded-lg "
                value={amount}
                onChange={(e) => setamount(e.target.value)}
              />
              <div className=" my-5 p-4 bg-[#13131a] rounded-xl">
                <h4 className="text-white  font-epilogue font-semibold text-[14px] leading-5 ">
                  Back it because you believe in it.
                </h4>
                <p className="text-[#808191] mt-5 font-epilogue font-normal leading-6 ">
                  Support the project for no reward, just because it speaks to
                  you.{" "}
                </p>
              </div>
              <Custombuttom
                btntype="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
