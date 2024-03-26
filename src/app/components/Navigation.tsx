import React from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import SearchInput from './SearchInput'

const Navigation = () => {
  return (
    <div className='max-container '>
      <DesktopNav />
      <MobileNav />
      
                 
    </div>
  )
}

export default Navigation
