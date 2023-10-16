"use client";
import BreadCrumbs from "@/components/modules/BreadCrumbs";
import FormControlInput from "@/components/modules/FormControlInput";
import FormControlSelect from "@/components/modules/FormControlSelect";
import HeaderContent from "@/components/modules/HeaderContent";
import MapComponent from "@/components/modules/MapComponent";
import ModalContent from "@/components/modules/ModalContent";
import OclackComponentD from "@/components/modules/OclackComponentD";
import PageCount from "@/components/modules/PageCount";
import { codeData, selectDataRange, selectDataType } from "@/data/selectData";

import axiosPrivate from "@/lib/adminAxios";
import { toastify } from "@/services/toastify";
import axios from "axios";
import { useEffect, useState } from "react";

const breadCrumbs = [
  {
    name: "تنظیمات",
    link: "/settings",
  },
  {
    name: "تعریف اقامتگاه",
    link: "/settings/createresidency",
  },
];

const CreateResidencyPage = ({ codes, states, baseUrl }) => {
  const [openModal, setOpenModal] = useState(false);
  const [codeNum, setCodeNum] = useState("");
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState({
    name_of_residence: "",
    type_residence: "",
    degree_residence: "",
    state: "تهران",
    city: "",
    address: "",
    phone_number: "",
    mobile_phone_number: "",
    website_address: "",
    room_delivery_time: "",
    room_checkout_time: "",
    construction_date: "",
    floor_count: "",
    Language: "فارسی",
  });

  const getCities = async (state) => {
    const newCities = [];
    const cities = await axios.post(`${baseUrl}/Location/`, {
      step: 3,
      country: "ایران",
      state ,
    });
    for (let num of cities.data.data) {
      newCities.push({ name: num.PR, value: num.PR });
    }
    
    setCities(newCities);
  };

  useEffect(() => {
    getCities(form.state);
  }, [form.state]);

  const setHour = (data, nameVal) => {
    setForm({
      ...form,
      [nameVal]: data,
    });
  };

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const setCode = (data) => {
    setCodeNum(data);
  };

  const setState = async (data) => {
    setCities([])
    setForm({
      ...form,
      state: data,
    });
  };

  const setCity = (data) => {
    setForm({
      ...form,
      city: data,
    });
  };

  const setTypeResidence = (data) => {
    setForm({
      ...form,
      type_residence: data,
    });
  };

  const setDegreeResidence = (data) => {
    setForm({
      ...form,
      degree_residence: data,
    });
  };

  const submitHandler = async () => {
    const newForm = {
      ...form,
      phone_number: `${codeNum}${form.phone_number}`,
    };
    try {
      const res = await axiosPrivate.post(
        "/ResidenceInfoCompletionView/",
        newForm
      );
      const data = res.data;

      toastify("success", "اقامتگاه با موفقیت ایجاد شد");
    } catch (error) {
      toastify("error", "خطایی در سرور رخ داده است");
    }
  };

  return (
    <>
      <ModalContent open={openModal} setOpen={setOpenModal} />
      <HeaderContent>
        <BreadCrumbs data={breadCrumbs} />
      </HeaderContent>
      <div className="content-pages">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormControlInput
            title="نام اقامتگاه "
            placeholder="نام اقامتگاه را وارد کنید"
            type="text"
            name="name_of_residence"
            value={form.name_of_residence}
            setValue={changeHandler}
            form={form}
          />
          <FormControlSelect
            title="نوع اقامتگاه"
            placeholder="انتخاب کنید"
            data={selectDataType}
            setValue={setTypeResidence}
          />
          <FormControlInput
            title="آدرس وبسایت"
            placeholder="لینک آدرس وبسایت خود را وارد نمایید "
            type="text"
            name="website_address"
            value={form.website_address}
            setValue={changeHandler}
            form={form}
          />
          <FormControlSelect
            title="درجه اقامتگاه"
            placeholder="یک مورد را انتخاب کنید"
            data={selectDataRange}
            setValue={setDegreeResidence}
          />
          <FormControlInput
            title="تاریخ ساخت اقامتگاه"
            placeholder="تاریخ مورد نظر خود را وارد نمایید"
            type="text"
            name="construction_date"
            value={form.construction_date}
            setValue={changeHandler}
            form={form}
          />
          <FormControlInput
            name="floor_count"
            value={form.floor_count}
            setValue={changeHandler}
            form={form}
            title="تعداد طبقات اقامتگاه"
            placeholder="تعداد طبقات اقامتگاه خود را وارد نمایید"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 mt-8">
          <div className="flex justify-between items-start flex-col">
            <label className="text-primary-main text-xl font-[500] px-4">
              ساعت تخلیه اتاق
            </label>
            <div className="input-primary" style={{ padding: "20px 0 " }}>
              <OclackComponentD setValue={setHour} name="room_checkout_time" />
            </div>
          </div>
          <div className="flex justify-between items-start flex-col">
            <label className="text-primary-main text-xl font-[500] px-4">
              ساعت تحویل اتاق
            </label>
            <div className="input-primary" style={{ padding: "20px 0 " }}>
              <OclackComponentD setValue={setHour} name="room_delivery_time" />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 tablet:grid-cols-2 gap-8">
          <div className="flex justify-between items-center  flex-row-reverse md:flex-row gap-2">
            <div className="w-3/12 md:w-4/12 lg:w-3/12 ">
              <FormControlSelect
                title="کد استان "
                placeholder="کد استان"
                data={codes}
                setValue={setCode}
              />
            </div>
            <div className="w-9/12 md:w-8/12 lg:w-9/12 ">
              <FormControlInput
                title="شماره تماس"
                placeholder="شماره تماس اقامتگاه خود را وارد نمایید ."
                type="text"
                name="phone_number"
                value={form.phone_number}
                setValue={changeHandler}
                form={form}
              />
            </div>
          </div>
          <FormControlInput
            title="شماره تلفن همراه"
            placeholder="لظفا شماره همراه خود را وارد نمایید ."
            type="text"
            name="mobile_phone_number"
            value={form.mobile_phone_number}
            setValue={changeHandler}
            form={form}
          />
          <FormControlSelect
            title="استان "
            placeholder="لظفا نام استان خود را وارد نمایید"
            data={states}
            setValue={setState}
          />

          <FormControlSelect
            title="شهرستان"
            placeholder="لظفا نام شهرستان خود را وارد نمایید"
            data={cities}
            setValue={setCity}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="mt-8">
            <FormControlInput
              title="آدرس"
              placeholder="لطفا آدرس اقامتگاه خود را وارد نمایید"
              type="text"
              name="address"
              value={form.address}
              setValue={changeHandler}
              form={form}
            />
          </div>
          <div className="border w-full border-gray-light py-4  rounded-sm text-lg ">
            <label className="text-primary-main text-xl font-[500] block mb-8 px-4">
              موقعیت مکانی را روی نقشه مشخص کنید.
            </label>
            <div>
              <MapComponent />
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-8 md:px-4 px-2">
          <p
            className="flex gap-2 text-primary-main text-xl font-[500] cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55L14.5598 20.94Z"
                stroke="#157B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.25 6.25L17.75 17.75"
                stroke="#157B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.75 6.25L6.25 17.75"
                stroke="#157B96"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 10V13C5 13.2761 5.22386 13.5 5.5 13.5H6H7"
                stroke="#157B96"
                strokeLinecap="round"
              />
              <circle cx="12" cy="6" r="1.5" stroke="#157B96" />
              <circle cx="12" cy="18" r="1.5" stroke="#157B96" />
              <mask id="path-7-inside-1_1004_33583" fill="white">
                <path d="M18.3027 10.0736C18.3733 9.81584 18.2206 9.54415 17.9538 9.52901C17.636 9.51099 17.3161 9.55908 17.0148 9.67233C16.5616 9.84271 16.1738 10.1519 15.9067 10.5557C15.6396 10.9595 15.5068 11.4374 15.5274 11.9211C15.5479 12.4049 15.7207 12.8698 16.021 13.2495C16.3214 13.6292 16.734 13.9044 17.2 14.0358C17.6661 14.1672 18.1616 14.148 18.6161 13.9811C19.0706 13.8141 19.4608 13.5079 19.7309 13.1061C19.9069 12.8444 19.9749 12.4476 19.9963 12.069C20.0124 11.7846 19.7298 11.5885 19.459 11.6772C19.278 11.7365 19.165 11.9105 19.1258 12.0969C19.0909 12.2637 19.024 12.4231 18.9278 12.5661C18.7714 12.7987 18.5455 12.976 18.2824 13.0726C18.0193 13.1693 17.7324 13.1804 17.4626 13.1043C17.1928 13.0283 16.9539 12.869 16.78 12.6491C16.6062 12.4293 16.5061 12.1601 16.4942 11.8801C16.4824 11.6 16.5592 11.3234 16.7139 11.0896C16.8685 10.8558 17.093 10.6768 17.3554 10.5782C17.4655 10.5368 17.5798 10.5105 17.6955 10.4993C17.9615 10.4735 18.2322 10.3314 18.3027 10.0736Z" />
              </mask>
              <path
                d="M18.9278 12.5661L17.683 11.7291L18.9278 12.5661ZM17.9538 9.52901L17.8689 11.0266L17.9538 9.52901ZM18.0387 8.03142C17.5136 8.00163 16.9849 8.0811 16.487 8.26828L17.5427 11.0764C17.6473 11.0371 17.7584 11.0203 17.8689 11.0266L18.0387 8.03142ZM16.487 8.26828C15.738 8.54985 15.0971 9.06078 14.6556 9.72816L17.1578 11.3832C17.2506 11.243 17.3853 11.1356 17.5427 11.0764L16.487 8.26828ZM14.6556 9.72816C14.2142 10.3955 13.9948 11.1853 14.0287 11.9847L17.026 11.8575C17.0189 11.6895 17.065 11.5235 17.1578 11.3832L14.6556 9.72816ZM14.0287 11.9847C14.0626 12.7842 14.3482 13.5525 14.8446 14.1801L17.1975 12.3189C17.0932 12.187 17.0331 12.0255 17.026 11.8575L14.0287 11.9847ZM14.8446 14.1801C15.341 14.8076 16.0229 15.2624 16.7931 15.4795L17.607 12.5921C17.4451 12.5464 17.3018 12.4508 17.1975 12.3189L14.8446 14.1801ZM16.7931 15.4795C17.5632 15.6966 18.3823 15.665 19.1334 15.3891L18.0989 12.573C17.941 12.631 17.7689 12.6377 17.607 12.5921L16.7931 15.4795ZM19.1334 15.3891C19.8844 15.1131 20.5292 14.6071 20.9757 13.9431L18.4861 12.2691C18.3923 12.4087 18.2568 12.5151 18.0989 12.573L19.1334 15.3891ZM20.9757 13.9431C21.3932 13.3221 21.4705 12.5688 21.4939 12.1537L18.4987 11.9843C18.4911 12.1198 18.4766 12.2226 18.4606 12.2916C18.453 12.3243 18.4475 12.3383 18.4478 12.3375C18.448 12.3372 18.4582 12.3106 18.4861 12.2691L20.9757 13.9431ZM17.6578 11.7889C17.6623 11.7677 17.6708 11.7474 17.683 11.7291L20.1726 13.4031C20.3772 13.0988 20.5194 12.7596 20.5939 12.405L17.6578 11.7889ZM17.683 11.7291C17.703 11.6995 17.7317 11.6769 17.7652 11.6646L18.7997 14.4807C19.3594 14.275 19.8399 13.8979 20.1726 13.4031L17.683 11.7291ZM17.7652 11.6646C17.7987 11.6523 17.8352 11.6509 17.8696 11.6606L17.0556 14.5481C17.6296 14.7099 18.2399 14.6863 18.7997 14.4807L17.7652 11.6646ZM17.8696 11.6606C17.9039 11.6703 17.9344 11.6906 17.9565 11.7186L15.6036 13.5797C15.9735 14.0474 16.4817 14.3863 17.0556 14.5481L17.8696 11.6606ZM17.9565 11.7186C17.9786 11.7466 17.9914 11.7808 17.9929 11.8165L14.9956 11.9437C15.0209 12.5395 15.2337 13.112 15.6036 13.5797L17.9565 11.7186ZM17.9929 11.8165C17.9944 11.8521 17.9846 11.8874 17.9649 11.9171L15.4628 10.2621C15.1338 10.7594 14.9703 11.3479 14.9956 11.9437L17.9929 11.8165ZM17.9649 11.9171C17.9452 11.9469 17.9167 11.9697 17.8832 11.9822L16.8275 9.17414C16.2694 9.38397 15.7918 9.76472 15.4628 10.2621L17.9649 11.9171ZM17.8832 11.9822C17.8692 11.9875 17.8547 11.9909 17.8399 11.9923L17.551 9.00624C17.305 9.03004 17.0617 9.08611 16.8275 9.17414L17.8832 11.9822ZM17.8399 11.9923C18.3943 11.9387 19.4414 11.5952 19.7495 10.4697L16.8559 9.67754C16.9376 9.37925 17.1262 9.19904 17.2577 9.11395C17.3795 9.03517 17.4835 9.01278 17.551 9.00624L17.8399 11.9923ZM18.9921 10.2517C18.127 10.5351 17.7632 11.2867 17.6578 11.7889L20.5939 12.405C20.5748 12.4959 20.5323 12.6155 20.4384 12.7405C20.3399 12.8716 20.172 13.0221 19.9259 13.1027L18.9921 10.2517ZM21.4939 12.1537C21.5763 10.6979 20.1532 9.87142 18.9921 10.2517L19.9259 13.1027C19.3064 13.3056 18.4486 12.8713 18.4987 11.9843L21.4939 12.1537ZM17.8689 11.0266C17.4694 11.0039 17.148 10.7743 16.9768 10.4956C16.817 10.2356 16.7844 9.93907 16.8559 9.67754L19.7495 10.4697C20.0095 9.51976 19.4818 8.11327 18.0387 8.03142L17.8689 11.0266Z"
                fill="#157B96"
                mask="url(#path-7-inside-1_1004_33583)"
              />
              <path d="M18 12H19.5" stroke="#157B96" strokeLinecap="round" />
            </svg>
            برای افزودن لگو خود اینجا کلیک کنید
          </p>
        </div>
        <div className="mt-24 mb-8   flex justify-between items-center tablet:flex-row flex-col gap-8">
          <div>
            <PageCount
              count={1}
              pageCount={4}
              prevLink={"/admin/settings/createresidency"}
              nextLink={"/admin/settings/addfeaturesresidency"}
            />
          </div>
          <div className="flex justify-center gap-2 items-center">
            <button type="button" className="btn-error outline">
              کنسل
            </button>
            <button
              type="button"
              className="btn-success"
              onClick={submitHandler}
            >
              ثبت تغییرات
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResidencyPage;
