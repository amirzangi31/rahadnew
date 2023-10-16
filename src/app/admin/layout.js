import React from 'react'
import AdminLayout from '@/components/layout/AdminLayout'
import OpenMenuContextProvider from '@/context/OpenMenuContextProvider'
import { cookies } from 'next/headers'

import { redirect } from 'next/navigation'


const LayoutAdmin = ({ children }) => {

  const nextCookies = cookies();
  const token = nextCookies.get("Token")?.value;


  if (!token) {
    redirect("/login")
  }



  return (
    
      <OpenMenuContextProvider>
        <AdminLayout>
          {children}
        </AdminLayout>
      </OpenMenuContextProvider>
    
  )
}

export default LayoutAdmin