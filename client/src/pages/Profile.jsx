import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";

const Profile = () => {
  const [isLoading, setisLoading] = useState(false);
  const [campaigns, setcampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();
  const fetchcampaigns = async () => {
    setisLoading(true);
    const data = await getUserCampaigns();
    setcampaigns(data);
    setisLoading(false);
  };

  useEffect(() => {
    if (contract) fetchcampaigns();
  }, [address, contract]);
  return (
    <DisplayCampaigns
      title="Your Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Profile;
