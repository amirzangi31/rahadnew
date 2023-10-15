"use client"


import React, { useState } from 'react'
import ArrowLeftIcon from '@/icons/ArrowLeftIcon'
import Link from 'next/link'

const ButtonChildSidebar = ({name , children}) => {
  const [showDrop , setShowDrop] = useState(false)

  return (
    <button type="button" className="btn-child-side group flex flex-col" onClick={() => setShowDrop(!showDrop)} >
      <div className='flex justify-between items-center w-full'>
      {name}
      <div className={`arrow-btn ${showDrop && "-rotate-90 md:rotate-0  "}` }>
         <ArrowLeftIcon /> 
      </div>
      </div>
      <div className={ `md:group-hover:block  static md:absolute  ${showDrop ? "block md:hidden" : "hidden" } top-0 right-full md:px-6  w-full md:w-auto`  }>
        <div className='md:w-[200px] border-[1.5px] border-[#F1F6FC] bg-white-main rounded-sm p-2 cursor-default'>

        <ul className='flex justify-start items-start flex-col gap-2'>
         {
           children.map((item , index) =>(
             <li key={index} className='w-full'>
               <Link href={item.link} >{item.name}</Link>
          </li>
             ))
            }
          </ul>
            </div>
      </div>
    </button>
  )
}

export default ButtonChildSidebar