import React from 'react'
import Menu from '../../assets/menu.svg'
const TopNav = ({ onClick, children, ...props }) => {
    return (
        <nav className='h-12 p-10 bg-gray-300 mb-5'>

            <span onClick={onClick}>
                <img src={Menu} alt="menu" />
            </span>
        </nav>
    )
}
export default TopNav