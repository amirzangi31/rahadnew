"use client";

import MenuIcon from "@/icons/MenuIcon";
import SearchIcon from "@/icons/SearchIcon";
import React, { useContext, useState } from "react";
import SearchBox from "./SearchBox";
import { OpenMenuContext } from "@/context/OpenMenuContextProvider";

const NavbarMobile = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const { openHandler } = useContext(OpenMenuContext);

  const showSearch = () => {
    setOpenSearch(true);
  };

  const closeSearch = () => {
    setOpenSearch(false);
  };

  return (
    <nav className="md:hidden flex justify-between items-center p-2">
      {openSearch ? (
        <SearchBox close={closeSearch} search={false} />
      ) : (
        <>
          <div>
            <button
              type="button"
              className="w-[48px] h-[48px] flex justify-center items-center"
              onClick={() => openHandler()}
            >
              <MenuIcon />
            </button>
          </div>
          <div className="text-2xl font-[800]  text-primary-light text-center">
            RAHAD
          </div>
          <div>
            <button
              type="button"
              className="w-[48px] h-[48px] flex justify-center items-center"
              onClick={showSearch}
            >
              <SearchIcon />
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavbarMobile;
