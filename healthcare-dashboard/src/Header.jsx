import React from 'react'
import {
    BsFillBellFill, BsfillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify
} from 'react-icons/bs'

function Header ({OpenSidebar}) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div className='header-left'>
                <BsSearch className='icon'/>
            </div>
            <div className='header-right'>
                <bsFillBellFill />
                <BsfillEnvelopeFill />
                <BsPersonCircle />
            </div>
        </header>
    )
}
export default Header