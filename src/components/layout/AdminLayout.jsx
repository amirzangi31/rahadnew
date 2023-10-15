import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = ({ children }) => {
  return (
    <div className="2xl:container mx-auto h-screen overflow-x-hidden relative">
      <main className="md:w-[calc(100%-200px)]   tablet:w-[calc(100%-260px)] md:mr-auto px-1">
        <HeaderAdmin />
        <div className="content  " style={{ direction: "ltr" }}>
          <div className="px-3" style={{ direction: "rtl" }}>
            {children}
          </div>
        </div>
      </main>
      <SidebarAdmin />
    </div>
  );
};

export default AdminLayout;
