import React from 'react'
import SearchBox from './SearchBox'

const HeaderContent = ({children}) => {
  return (
    <header className='py-4 flex justify-center md:justify-between items-center'>
        <div > 
            {children}
        </div>
        <div className='hidden md:block w-[260px]'>
            <SearchBox  search={true} /> 
        </div>
    </header>
  )
}

export default HeaderContent