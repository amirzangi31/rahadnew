"use client";

import React, { useEffect, useState } from "react";
//NEXT
import { useRouter } from "next/navigation";

//Pngs
import User from "@/icons/login/User";
import HiddenIcon from "@/icons/login/Hidden";

import LanguageButton from "./LanguageButton";

//utils
import { validate } from "../../../utils/validateForm";
import Logo from "@/icons/Logo";
//cookie
import { useCookies } from "react-cookie";
//toast
import { toastify } from "@/services/toastify";
//axios
import axios from "axios";

const LoginForm = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [form, setForm] = useState({
    UserName: "",
    Password: "",
  });

  const [hiddenPas, setHiddenPas] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    UserName: false,
    Password: false,
  });

  const router = useRouter();

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
  const submitHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      setTouched({
        UserName: true,
        Password: true,
      });
      return;
    }
    axios
      .post("https://backendrahad.pythonanywhere.com/Login/", form)
      .then((res) => {
        toastify("success", "ورود با موفقیت انجام شد");
        setCookie("Token", res.data.data.Authorization, { path: "/" });
      })
      .then(() => {
        router.refresh();
      })
      .catch((error) =>
        toastify("error", "نام کاربری یا رمز عبور شما اشتباه میباشد")
      );
  };

  return (
    <form className="w-10/12 sm:w-8/12 mx-auto  min-h-[calc(100vh-200px)] flex justify-between flex-col py-4">
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
          ${errors.UserName && !touched.UserName && "border-gray-light"} 
          ${!errors.UserName && touched.UserName && "border-success"} 
          ${
            errors.UserName && touched.UserName && "border-error"
          } rounded-[10px] w-full flex justify-end items-center p-3`}
        >
          <input
            onFocus={fucosHandler}
            name="UserName"
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
        {errors.name && touched.UserName && (
          <span className="text-[12px] text-error ">{errors.UserName}</span>
        )}
      </div>
      <div className="w-full  flex flex-col items-start">
        <label htmlFor="Password" className=" my-2 mr-1 text-primary-main  ">
          رمز عبور
        </label>
        <div
          className={`border 
          ${errors.Password && !touched.Password && "border-gray-light"} 
          ${!errors.Password && touched.Password && "border-success"} 
          ${
            errors.Password && touched.Password && "border-error"
          } rounded-[10px] w-full flex justify-end items-center p-3`}
        >
          <input
            onFocus={fucosHandler}
            name="Password"
            onChange={changeHandler}
            type={hiddenPas ? "text" : "password"}
            id="Password"
            autoComplete="password"
            className="bg-transparent border-none outline-none flex-1 placeholder:text-[12px] text-gray-dark"
            placeholder="رمز عبور خود را وارد کنید"
          />
          <span className="cursor-pointer">
            <HiddenIcon />
          </span>
        </div>
        {errors.Password && touched.Password && (
          <span className="text-[12px] text-error ">{errors.Password}</span>
        )}
        <a href="#" className="w-full text-left text-primary-main">
          فراموشی رمز
        </a>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-[200px] h-[55px] rounded-sm text-white-main font-[500] mt-4"
          style={{
            background:
              "linear-gradient(90deg, #087592 43.67%, #2393B0 97.5%) ",
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
