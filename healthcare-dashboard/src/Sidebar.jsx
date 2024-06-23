import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3XGapFill, BsPeopleFill,
    BsListCheck, BsFillGearFill, BsMenuButtonWideFill
} from 'react-icons/bs'


function Sidebar ({openSidebarToggle, Opensidebar}) {
    return (
        <aside id="sidebar" className= {openSidebarToggle ? "sidebar-responsive":""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> SHOP
                </div>
                <span className='icon close_icon' onclick={ Opensidebar }>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list -item'>
                    <a href="Dashboard">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href="Products">
                        <BsFillArchiveFill className='icon' /> Products
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href="Categories">
                        <BsFillGrid3XGapFill className='icon' /> Categories
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href='Customers'>
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href='Inventory'>
                        <BsListCheck className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href='Reports'>
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list -item'>
                    <a href='Setting'>
                        <BsFillGearFill  className='icon' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar