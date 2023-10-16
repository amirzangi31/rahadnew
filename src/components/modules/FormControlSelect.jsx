"use client";

import React, { useState } from "react";

const FormControlSelect = ({ title, placeholder, data, setValue }) => {
  const [open, setOpen] = useState(false);

  const [val, setVal] = useState({
    name: placeholder,
    value: "",
    icon: "",
  });
  

  const selectHandler = (data) => {
    setVal(data);
    setOpen(false);
    setValue(data.value);
  };

  return (
    <div className="flex justify-between items-start flex-col">
      <label className="text-primary-main text-xl font-[500] px-4">
        {title}
      </label>
      <div className="input-primary relative ">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="flex justify-center items-center gap-2">
            {" "}
            {val.name} {val.icon}
          </span>
          <span>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.35352 1.41699L8.38281 8.44629L15.4121 1.41699"
                stroke="#A2AFB8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div
          className={`${
            !open && "hidden"
          } absolute top-[calc(100%-0.5rem)] left-0 w-full input-primary z-40 bg-white-main flex flex-col gap-4 font-[400]`}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-primary-main hover:font-[800] flex justify-between items-center"
              onClick={() =>
                selectHandler({
                  name: item.name,
                  icon: item.icon,
                  value: item.value,
                })
              }
            >
              {item.name} {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormControlSelect;
