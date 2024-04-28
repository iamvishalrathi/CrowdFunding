import React from "react";

const CountBox = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center w-[150px] h-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full ">
        {value}
      </h4>
      <p className="font-epilogue font-semibold text-[16px] text-[#a59c9c] p-3 bg-[#282868] rounded-b-[10px] w-full text-center ">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
