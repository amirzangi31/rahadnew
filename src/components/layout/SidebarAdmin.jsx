"use client";

import React, { useContext, useEffect, useState } from "react";
import ButtonSidebar from "../modules/ButtonSidebar";
import sidebarData from "@/data/SidebarData";
import Loggout from "@/icons/iconsSidebar/Loggout";
import { OpenMenuContext } from "@/context/OpenMenuContextProvider";
import CloseIcon from "@/icons/CloseIcon";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const SidebarAdmin = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const { open, closeHandler } = useContext(OpenMenuContext);
  const pathname = usePathname();
  const [menuButtons, setMenuButton] = useState(sidebarData);
  const router = useRouter();

  //off the all button active
  const noActiveAllButtons = () => {
    const result = menuButtons.map((item) => ({ ...item, active: false }));
    const menu = [...result];
    setMenuButton(menu);
  };

  useEffect(() => {
    closeHandler();
    noActiveAllButtons();
  }, [pathname]);

  const setActiveButton = (index) => {
    const result = menuButtons.map((item) => ({ ...item, active: false }));
    const menu = [...result];

    if (menuButtons[index].active === true) {
      menu[index].active = false;
    } else {
      menu[index].active = true;
    }

    setMenuButton(menu);
  };

  const logoutHandler = () => {
    setCookie("Token", "gfds", { path: "/", maxAge: 0 });
    router.refresh();
  };

  return (
    <aside
      className={`md:w-[200px] tablet:w-[260px] pb-10 px-2 md:px-0  overflow-y-scroll bg-white-main border-l-2 border-gray-light/30 w-full h-full  absolute top-0 ${
        open ? "right-0" : "right-[-100%]"
      } md:right-0 md:pr-5 flex justify-start items-center flex-col gap-2`}
    >
      <div className="h-[113.6px] flex justify-between md:justify-center w-full px-4">
        <div
          className="flex justify-center items-center md:hidden"
          onClick={() => closeHandler()}
        >
          <CloseIcon />
        </div>
        <svg
          width="114"
          height="113.6"
          viewBox="0 0 114 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.476 1.294V28.94H20.874V34H0.036V1.294H6.476ZM50.0294 18.452C50.0294 28.204 44.5554 34.46 36.2294 34.46C28.0414 34.46 22.3834 28.204 22.3834 18.912V16.842C22.3834 7.458 27.5354 0.833999 36.1834 0.833999C44.5554 0.833999 50.0294 7.044 50.0294 16.75V18.452ZM28.8694 18.452C28.8694 25.352 31.4914 29.308 36.2294 29.308C40.8754 29.308 43.4514 25.536 43.4974 18.682V16.796C43.4974 9.804 40.8754 6.032 36.1834 6.032C31.6294 6.032 28.9154 9.574 28.8694 16.06V18.452ZM80.7782 29.86C78.4322 32.712 73.8322 34.46 68.3582 34.46C59.9402 34.46 54.4202 28.71 54.3282 19.464L54.2822 16.612C54.1902 7.734 58.7902 0.833999 67.8982 0.833999C75.5342 0.833999 79.9502 4.514 80.7782 11.552H74.5222C73.8322 7.596 71.8082 5.894 68.0822 5.894C63.3902 5.894 60.8142 9.666 60.8142 16.474V18.728C60.8142 25.582 63.5282 29.4 68.6802 29.4C71.2102 29.4 73.0962 28.894 74.3382 27.652V21.672H68.0362V16.98H80.7782V29.86ZM113.1 18.452C113.1 28.204 107.626 34.46 99.2997 34.46C91.1117 34.46 85.4537 28.204 85.4537 18.912V16.842C85.4537 7.458 90.6057 0.833999 99.2537 0.833999C107.626 0.833999 113.1 7.044 113.1 16.75V18.452ZM91.9397 18.452C91.9397 25.352 94.5617 29.308 99.2997 29.308C103.946 29.308 106.522 25.536 106.568 18.682V16.796C106.568 9.804 103.946 6.032 99.2537 6.032C94.6997 6.032 91.9857 9.574 91.9397 16.06V18.452Z"
            fill="#136081"
          />
        </svg>
      </div>
      {menuButtons.map((item, index) => (
        <ButtonSidebar
          key={index}
          {...item}
          index={index}
          setActive={setActiveButton}
          offAll={noActiveAllButtons}
        />
      ))}
      <div className="btn-sidebar" onClick={logoutHandler}>
        <Loggout />
        خروج از حساب کاربری
        <div></div>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
