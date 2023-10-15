import React from "react";

const FormControlInput = ({ title, placeholder, type }) => {
  return (
    <div className="flex justify-between items-start flex-col">
      <label className="text-primary-main text-xl font-[500] px-4">{title}</label>
      <input type={type} placeholder={placeholder}  className="input-primary" />
    </div>
  );
};

export default FormControlInput;
