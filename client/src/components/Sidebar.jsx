import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logo, sun } from "../assets";
import { navlinks } from "../contants";

const Icon = (props) => {
  const { styles, name, imgUrl, isActive, disabled, handleClick } = props;
  return (
    <div
      className={` w-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-[#a8b5c2]"
      } flex justify-center items-center ${
        !disabled && "cursor-pointer"
      } ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-3/4 h-3/4" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-3/4 h-3/4 ${isActive !== name && "grayscale"}`}
        />
      )}
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh">
      <Link to="/">
        <Icon imgUrl={logo} styles="w-[52px] h-[52px] bg-[#2c2f32]" />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#0A2E36] rounded-[20px] w-[76px] py-4 mt-10">
        <div className=" flex flex-col justify-center items-center gap-5">
          {navlinks.map((Link) => (
            <Icon
              key={Link.name}
              {...Link}
              isActive={isActive}
              handleClick={() => {
                if (!Link.disabled) {
                  setIsActive(Link.name);
                  navigate(Link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  );
};

export default Sidebar;
