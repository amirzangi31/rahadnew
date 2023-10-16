"use client";

import React, { useState } from "react";

const OclackComponentD = ({ setValue, name }) => {
  const [pm, setPm] = useState(false);
  const [min, setMin] = useState("");
  const [hour, setHour] = useState("");

  const validateHour = (e) => {
    
    if (e.target.value > 12 || e.target.value < 0) e.target.value = 12;
    if (e.target.value.split("").length > 2) e.target.value = "00";
    setHour(e.target.value);
  };
  const validateMinute = (e) => {
    if (e.target.value > 59 || e.target.value < 0) e.target.value = 59;
    if (e.target.value.split("").length > 2) e.target.value = "00";
    if (e.target.value === "") return;
    setMin(e.target.value);
  };

  const setData = () => {
    if (min.split("").length === 0 || hour.split("").length === 0) {
      return;
    }

    setValue(
      `${hour.split("").length === 1 ? `0${hour}` : hour}:${
        min.split("").length === 1 ? `0${min}` : min
      }:00`,
      name
    );
    console.log(`${hour.split("").length === 1 ? pm ? `${Number(hour)+12}` : `0${hour}` : hour}:${
      min.split("").length === 1 ? `0${min}` : min
    }:00`,)
  };

  return (
    <div className="flex justify-between items-center flex-col px-5">
      <div className="flex justify-between items-center  w-full">
        <div className="flex justify-center items-center pl-2 w-2/12 ">
          <div className="h-[72px] border border-gray-light rounded-sm flex justify-between items-center flex-col overflow-hidden">
            <span
              className={`block cursor-pointer p-2   ${
                !pm ? "bg-gray-main text-white-main" : "bg-white-main"
              }`}
              onClick={() => setPm(false)}
            >
              AM
            </span>
            <span
              className={`block cursor-pointer p-2 border-t ${
                pm ? "bg-gray-main text-white-main" : "bg-white-main"
              }`}
              onClick={() => setPm(true)}
            >
              PM
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center w-10/12 relative">
          <div className="text-text-main flex justify-between items-end gap-2 flex-col relative  w-1/2 pl-2 ">
            <input
              type="texr"
              pattern="[0-9]"
              onChange={validateMinute}
              className=" max-w-full text-center text-[45px] bg-gray-light rounded-sm focus:text-primary-main outline-none focus:border-2   focus:border-primary-light/30 h-[72px]"
            />
            <span className="absolute top-full text-gray-main">دقیقه</span>
          </div>
          <span className="text-[57px] text-text-main absolute top-0 left-[calc(50%-9.60px)] h-[72px] flex justify-center items-center ">
            :
          </span>
          <div className="text-text-main flex justify-between items-end flex-col relative gap-2 w-1/2 pr-2">
            <input
              type="number"
              onChange={validateHour}
              className=" max-w-full text-center h-[72px] text-[45px] bg-gray-light rounded-sm focus:text-primary-main outline-none focus:border-2  focus:border-primary-light/30 "
            />
            <span className="absolute top-full text-gray-main">ساعت</span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center w-full">
        <div>
          <button
            type="button"
            className="mx-2 text-primary-light"
            onClick={setData}
          >
            تایید
          </button>
          <button type="button" className="mx-2 text-primary-light">
            لغو
          </button>
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 13.07L16.49 16.36L17.51 14.64L13 11.93V6.42H11V13.07Z"
              fill="#49454F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OclackComponentD;
