import React from "react";

const InfoCard = ({ image, heading, text }) => {
  return (
    <div className=" flex flex-col justify-center bg-[#8a42bb] rounded-lg items-center m-3 p-2 w-[200px] h-[200px] ">
      <img src={image} alt={heading} className=" p-3 h-[100px] " />
      <h3 className="text-center text-[16px]">{heading}</h3>
      <p className="text-center text-[12px] ">{text}</p>
    </div>
  );
};

export default InfoCard;
