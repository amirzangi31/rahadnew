"use client"

import React, { createContext } from 'react'
import { CookiesProvider } from 'react-cookie'

const CookieContext = createContext({})



const CookieContextProvider = ({children}) => {
  return (
    <CookieContext.Provider value={false} >
        <CookiesProvider>
            {children}
        </CookiesProvider>
    </CookieContext.Provider>
  )
}

export default CookieContextProvider