import LoginPage from '@/components/templates/LoginPage'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {

  
  const nextCookies = cookies();
  const token = nextCookies.get("Token")?.value;


  if (token) {
    redirect("/admin")
  }


  return (
    <LoginPage /> 
  )
}

export default page