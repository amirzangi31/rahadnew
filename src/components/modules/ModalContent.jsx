"use client";

import React from "react";

const ModalContent = ({ open, setOpen }) => {
  
  const closeHandler = (e) => {
    
      if(e.target.className.includes("modal")){
        setOpen(false)
      }
  } 


  
  return (
    <div
    
      onClick={closeHandler}
      className={`modal ${
        open
          ? "fixed top-0 left-0 w-full min-h-screen  z-50 flex justify-center items-center"
          : "hidden"
      }`}
    >ؤ
      <div className=" bg-white-main  w-[calc(100%-20px)] sm:w-[500px]  md:w-[600px]  mx-auto h-[200px] sm:h-[250px] rounded-sm border border-gray-light px-5 flex justify-center items-center ">
        <div className="flex justify-center items-center flex-col w-full sm:w-10/12 md:w-9/12">
          <div className="w-full">
          <p className="text-gray-dark w-full text-right px-4">لطفا آیتم مورد نظر خود را وارد نمایید </p>
        <input type="text" className="input-primary " />
          </div>
        <div className="flex flex-row-reverse gap-4 py-6 ">
          <button type="button" className="btn-success">
            ثبت
          </button>
          <button type="button" className="btn-error outline" onClick={() => setOpen(false)}>
            لغو
          </button></div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
