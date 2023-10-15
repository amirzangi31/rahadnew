"use client";

import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import Link from "next/link";
import React, { useState } from "react";
import ButtonChildSidebar from "./ButtonChildSidebar";

const ButtonSidebar = (props) => {
  const { drop, name, icon , active , setActive , index , offAll } = props;
  

  const closeHandler = (e) => {
      if(e.target.className.includes("drop-box") || e.target.className.includes("overlay")){
        offAll()
      }
  }
  
 
  return (
    <>
    <div onClick={closeHandler}  className={` overlay fixed top-0 left-0 z-[1] w-[100vw] h-screen  ${active ? "block" : "hidden"}`}>

    </div>
      <div
        className={`btn-sidebar ${active ? "active" : ""}`}
        onClick={() => setActive(index)}
      >
        <div
          className="flex justify-around items-center w-full font-[400] px-3
        "
        >
          {icon}
          <div className="flex-1">
          {name}
          </div>
          {drop && <div className="arrow-btn">
            <ArrowLeftIcon />
          </div>}
          {!drop && <div></div>}
        </div>
      </div>



      {drop && (
        <div className={`drop-box ${active ? "active" : ""}`} onClick={closeHandler}>

        <div className="drop-box__content" >
          <ul className="menu-list">
            {props.children.map((item, index) => (
              <li key={index} className="text-text-main text-xl">
                {item.drop ? (

                    <ButtonChildSidebar {...item} /> 

                ) : <Link href={item.link}>{item.name}</Link>}
                
              </li>
            ))}
          </ul>
        </div>
        </div>

      )}
    </>
  );
};

export default ButtonSidebar;
