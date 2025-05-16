import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs"

const Header = ({openSideBar}) => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon cursor-pointer' onClick={openSideBar}/>
        </div>
        <div className="header-left">
            <BsSearch className='icon iconsearch cursor-pointer'/>
        </div>
        <div className="header-right cursor-pointer">
            <BsFillEnvelopeFill className='icon cursor-pointer'/>
            <BsFillBellFill className='icon cursor-pointer '/>
            <BsPersonCircle className='icon cursor-pointer'/>
        </div>
    </header>
  )
}

export default Header