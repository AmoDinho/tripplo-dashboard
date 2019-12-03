import React from 'react'
import Styled from 'styled-components'
import Menu from '../../assets/menu.svg'
import SearchBar from '../inputs/SearchBar'
import Bell from '../../assets/notification.svg'
import Grid from '../../assets/grid.svg'
import Avatar from '../user/Avatar'
import User from '../../assets/user.jpg'
const TopNav = ({ isOpen, onClick, children, ...props }) => {
    const NavGrid = Styled.div`
display: grid;
grid-template-columns: 0.5fr 0.5fr 0.9fr;
grid-gap: 0;
margin-bottom: 10px;
    `
    return (
        <nav className={'h-12 p-10 bg-gray-300 mb-5 flex items-center justify-between flex-wrap '}>

            <div className="flex items-center flex-shrink">
                <span onClick={onClick}>
                    <img src={Menu} alt="menu" />
                </span>
            </div>


            <div className="  lg:flex lg:items-start ">


                <SearchBar />


                <img src={Grid} className="ml-8 mr-5" alt="grid" />
                <img src={Bell} className="mr-5" alt="bell" />

                <Avatar src={User} />


            </div>








        </nav>
    )
}
export default TopNav