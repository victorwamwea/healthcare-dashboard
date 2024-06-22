import React from 'react'
import {Bscart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3XGapFill, BsPeopleFill,
    BsListCheck, BsFillGearFill, BsMenuButtonWideFill
} from 'react-icons/bs'


function Sidebar () {
    return (
        <aside id="sidebar">
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <Bscart3 className='icon_header' /> SHOP
                </div>
                <span className='icon close_icon'>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list -item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href="">
                        <BsFillArchiveFill className='icon' /> Products
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href="">
                        <BsFillGrid3XGapFill className='icon' /> Categories
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href=''>
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href=''>
                        <BsListCheck className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href=''>
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href=''>
                        <BsFillGearFill  className='icon' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar