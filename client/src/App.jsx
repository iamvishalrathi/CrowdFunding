import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { CreateCampaign, Home, CampaignDetails, Profile } from "./pages";
import Sidebar from "./components/Sidebar";
import NavigationBar from "./components/NavigationBar";
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row border-black">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1000px] mx-auto sm:pr-5">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/CreateCampaign" element={<CreateCampaign />} />
          <Route path="/CampaignDetails/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
