import React from 'react'
import Menu from '../../assets/menu.svg'
const TopNav = ({ isOpen, onClick, children, ...props }) => {
    return (
        <nav className={isOpen ? 'h-12 p-10 bg-gray-300 mb-5 ' : 'h-12 p-10 bg-gray-300 mb-5 w-screen'}>

            <span onClick={onClick}>
                <img src={Menu} alt="menu" />
            </span>
        </nav>
    )
}
export default TopNav