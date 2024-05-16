import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { CreateCampaign, Home, CampaignDetails, Profile } from "./pages";
import Sidebar from "./components/Sidebar";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
//import Banner from "./assets/banner";
const App = () => {
  const [color, setcolor] = useState(false);

  return (
    <div
      className={`relative backimg sm:-8 p-4 ${
        color ? "bg-[#97bbf9]" : "bg-[rgb(193,164,240)]"
      } min-h-screen flex flex-col border-black  `}
    >
      <div className="flex flex-row justify-between items-center max-sm:w-full max-w-[1200px] mx-auto sm:pr-5">
        <div className="sm:flex hidden h-[100px] mx-10 flex-row justify-between relative">
          <Sidebar
            handle_click={() => {
              setcolor(!color);
            }}
          />
        </div>
        <NavigationBar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1200px] mx-auto my-10 sm:pr-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/CreateCampaign" element={<CreateCampaign />} />
          <Route path="/CampaignDetails/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
