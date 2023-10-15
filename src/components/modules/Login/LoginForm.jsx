"use client";

import React, { useEffect, useState } from "react";

//Pngs
import User from "@/icons/login/User";
import HiddenIcon from "@/icons/login/Hidden";

import LanguageButton from "./LanguageButton";

//utils
import { validate } from "../../../utils/validateForm";
import Logo from "@/icons/Logo";

const LoginForm = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const [hiddenPas, setHiddenPas] = useState(false);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    password: false,
  });

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fucosHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  //send information for login
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-10/12 sm:w-8/12 mx-auto  min-h-[calc(100vh-200px)] flex justify-between flex-col">
      <div>
        <LanguageButton />
      </div>
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <p className="font-[500] text-[18px] text-primary-main text-center my-4">
        اطلاعات حساب کاربری خود را وارد کنید
      </p>
      <div className="w-full  flex flex-col items-start">
        <label htmlFor="userName" className=" my-2 mr-1 text-primary-main ">
          نام کاربری{" "}
        </label>
        <div
          className={`border 
          ${errors.name && !touched.name && "border-gray-dark"} 
          ${!errors.name && touched.name && "border-success"} 
          ${
            errors.name && touched.name && "border-error"
          } rounded-[10px] w-full flex justify-end items-center p-3`}
        >
          <input
            onFocus={fucosHandler}
            name="name"
            onChange={changeHandler}
            type="text"
            id="userName"
            className="bg-transparent border-none outline-none flex-1 placeholder:text-[12px] text-gray-dark"
            placeholder="نام کاربری خود را وارد کنید"
          />
          <span>
            <User />
          </span>
        </div>
        {errors.name && touched.name && (
          <span className="text-[12px] text-error ">{errors.name}</span>
        )}
      </div>
      <div className="w-full  flex flex-col items-start">
        <label htmlFor="Password" className=" my-2 mr-1 text-text-blue ">
          رمز عبور
        </label>
        <div
          className={`border 
          ${errors.password && !touched.password && "border-gray-dark"} 
          ${!errors.password && touched.password && "border-secondary"} 
          ${
            errors.password && touched.password && "border-error"
          } rounded-[10px] w-full flex justify-end items-center p-3`}
        >
          <input
            onFocus={fucosHandler}
            name="password"
            onChange={changeHandler}
            type={hiddenPas ? "text" : "password"}
            id="Password"
            className="bg-transparent border-none outline-none flex-1 placeholder:text-[12px] text-gray-dark"
            placeholder="رمز عبور خود را وارد کنید"
          />
          <span className="cursor-pointer">
            <HiddenIcon />
          </span>
        </div>
        {errors.password && touched.password && (
          <span className="text-[12px] text-error ">{errors.password}</span>
        )}
        <a href="#" className="w-full text-left text-primary-main">
          فراموشی رمز
        </a>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-[200px] h-[55px] rounded-sm text-white-main font-[500]"
          style={{
            background: "linear-gradient(90deg, #087592 43.67%, #2393B0 97.5%)",
          }}
          onClick={submitHandler}
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
