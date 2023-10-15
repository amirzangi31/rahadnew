"use client";
import React, { useState } from "react";

import LangIcon from "./LangIcon";
import LangData from "@/data/LangData";

const LanguageButton = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState({
    value: "PR",
    icon: <LangIcon />,
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
          {value.value} {value.icon}
        </div>
        {open && (
          <ul className="dropdown">
            {LangData.map((item, index) => (
              <li
              key={index}
                onClick={() => changeValue({...item})}
              >
                {item.icon}
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
