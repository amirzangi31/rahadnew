import AdminLayout from '@/components/layout/AdminLayout'
import OpenMenuContextProvider from '@/context/OpenMenuContextProvider'
import React from 'react'

const LayoutAdmin = ({ children }) => {
  return (
    <OpenMenuContextProvider>
      <AdminLayout>
        {children}
      </AdminLayout>
    </OpenMenuContextProvider>
  )
}

export default LayoutAdmin