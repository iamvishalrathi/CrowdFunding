import React from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../assets";
import Fundcards from "./Fundcards";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/CampaignDetails/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <h1 className="font-epilogue font-bold text-[18px] text-white text-left ">
        {title} ({campaigns.length})
      </h1>
      <div className=" flex flex-wrap mt-[20px] gap-[50px] ">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className=" font-epilogue font-semibold text leading-[30px] text-[#6b6bee] ">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <Fundcards
              key={campaign.id}
              {...campaign}
              handleclick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
