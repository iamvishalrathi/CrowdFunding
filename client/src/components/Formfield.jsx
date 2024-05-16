import React from "react";

const Formfield = ({
  LabelName,
  placeholder,
  inputType,
  isTextArea,
  Value_,
  handleChange,
}) => {
  return (
    <>
      <label className=" flex-1 w-full flex flex-col ">
        {LabelName && (
          <span className="font-epilogue text-[14px] leading-[22px] text-[#808191] mb-[10px] font-semibold ">
            {LabelName}
          </span>
        )}
        {isTextArea ? (
          <textarea
            required
            onChange={handleChange}
            value={Value_}
            type={inputType}
            rows={10}
            placeholder={placeholder}
            className="py-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text rounded-[10px] sm:min-w-[300px] "
          ></textarea>
        ) : (
          <input
            required
            onChange={handleChange}
            value={Value_}
            type={inputType}
            placeholder={placeholder}
            className="py-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text rounded-[10px] sm:min-w-[300px] "
          ></input>
        )}
      </label>
    </>
  );
};

export default Formfield;
