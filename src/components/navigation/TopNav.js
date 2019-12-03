import React from 'react'
import Menu from '../../assets/menu.svg'
import SearchBar from '../inputs/SearchBar'
import Bell from '../../assets/notification.svg'
import Grid from '../../assets/grid.svg'
const TopNav = ({ isOpen, onClick, children, ...props }) => {
    return (
        <nav className={isOpen ? 'h-12 p-10 bg-gray-300 mb-5 flex flex-row' : 'h-12 p-10 bg-gray-300 mb-5 w-screen flex flex-row'}>

            <span onClick={onClick}>
                <img src={Menu} alt="menu" />
            </span>

            <SearchBar />
            <div>
                <img src={Grid} alt="grid" />
                <img src={Bell} alt="bell" />

            </div>

        </nav>
    )
}
export default TopNav