"use client";
import React, { useState } from "react";

import LangIcon from "./LangIcon";
import LangData from "@/data/LangData";
import Image from "next/image";

const LanguageButton = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState({
    value: "PR",
    icon: "/Language.png",
  });

  //change value button
  const changeValue = ({ value, icon }) => {
    setValue({
      value,
      icon,
    });
  };

  return (
    <>
      <div
        className={`${open ? "languageButton active" : "languageButton"} `}
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center w-[70px] ">
          {value.value} <Image src={value.icon} alt="icon" width={24} height={24} /> 
        </div>
        {open && (
          <ul className="dropdown">
            {LangData.map((item, index) => (
              <li
              key={index}
                onClick={() => changeValue({...item})}
              >
                
                <Image src={item.icon} alt="icon" width={24} height={24} /> 
                {item.value}
              </li>
            ))}
          
          </ul>
        )}
      </div>
    </>
  );
};

export default LanguageButton;
