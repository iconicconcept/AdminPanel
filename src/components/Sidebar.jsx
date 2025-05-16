import React from 'react'
import { BsCart3, BsGrid1X2, BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from "react-icons/bs"

const Sidebar = ({openToggle, openSideBar}) => {
  return (
    <aside id='sidebar' className={openToggle ? "sidebar-responsive": ""}>
        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3 className="icon" /> SHOP
            </div>
            <span className='icon close_close' onClick={openSideBar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsGrid1X2 className='icon'/> Dashboard 
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BsFillArchiveFill className='icon'/> Products 
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BsFillGrid3X2GapFill className='icon'/> Category 
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BsPeopleFill className='icon'/> Customers  
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BsListCheck className='icon'/> Inventory 
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BsMenuButtonWideFill className='icon' /> Reports 
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BsFillGearFill className='icon' /> Settings 
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar