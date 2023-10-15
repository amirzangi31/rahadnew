import React from "react";
import NavbarMobile from "../modules/NavbarMobile";
import headerButtons from "@/data/headerButton";
import ButtonHeader from "../modules/ButtonHeader";

const HeaderAdmin = () => {
  return (
    <header>
      <NavbarMobile />

      <div className="header-row">
        {headerButtons.map((item, index) => (
          <ButtonHeader key={index} {...item} />
        ))}
      </div>
    </header>
  );
};

export default HeaderAdmin;
