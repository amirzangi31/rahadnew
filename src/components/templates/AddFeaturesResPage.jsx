"use client";
import React, { useState } from "react";
import HeaderContent from "../modules/HeaderContent";
import BreadCrumbs from "../modules/BreadCrumbs";
import FeatureResidency from "../modules/FeatureResidency";

const breadCrumbs = [
  {
    name: "تنظیمات",
    link: "/settings",
  },
  {
    name: "تعریف اقامتگاه",
    link: "/settings/createresidency",
  },
  {
    name: "افزودن امکانات",
    link: "/settings/addfeatureresidency",
  },
];

const AddFeaturesResPage = () => {
  const [features, setFeatures] = useState({});
 
  return (
    <>
      <HeaderContent>
        <BreadCrumbs data={breadCrumbs} />
      </HeaderContent>
      <div className="content-pages mt-14 ">
        <h1 className="text-2xl text-primary-main">ویژگی ها و امکانات هتل </h1>
        <div className="grid grid-cols-4 w-[1000px]  2xl:w-full  gap-2  px-6  mt-6 border border-error">
          <div className="flex justify-start items-start gap-8 flex-col">
              <FeatureResidency id={"one"} name={"آرایشگاه"} /> 
              <FeatureResidency id={"two"} name={"استخر"} /> 
              <FeatureResidency id={"three"} name={"پارک آبی"} /> 
              <FeatureResidency id={"four"} name={"جکوزی"} /> 
              <FeatureResidency id={"five"} name={"لابی"} /> 
          </div>
          <div className="flex justify-start items-start gap-8 flex-col">
              <FeatureResidency id={"six"} name={"سونا"} /> 
              <FeatureResidency id={"seven"} name={"ماساژ"} /> 
              <FeatureResidency id={"eight"} name={"رستوران"} /> 
              <FeatureResidency id={"nine"} name={"اینترنت"} /> 
              <FeatureResidency id={"ten"} name={"فضای بازی کودکان"} /> 
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AddFeaturesResPage;
