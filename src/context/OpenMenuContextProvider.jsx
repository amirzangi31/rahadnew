"use client"


import React, { createContext, useState } from "react";

export const OpenMenuContext = createContext(false);

const OpenMenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(true)
  }
  const closeHandler = () => {
    setOpen(false)
  }


  return (
    <OpenMenuContext.Provider value={{ open, openHandler ,closeHandler  }}>{children}</OpenMenuContext.Provider>
  );
};

export default OpenMenuContextProvider;
