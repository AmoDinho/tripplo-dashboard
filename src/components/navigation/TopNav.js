import React from 'react'
import Menu from '../../assets/menu.svg'
import SearchBar from '../inputs/SearchBar'
import Bell from '../../assets/notification.svg'
import Grid from '../../assets/grid.svg'
import Avatar from '../user/Avatar'
import User from '../../assets/user.jpg'
const TopNav = ({ onClick, children, ...props }) => {

    return (
        <nav className={'h-16 pb-10 bg-gray-300 mb-5 flex items-center lg:justify-between flex-wrap  '}>

            <div className="flex items-center flex-shrink  ml-3 s:mt-3">
                <span onClick={onClick}>
                    <img src={Menu} alt="menu" />
                </span>
            </div>


            <div className="  flex items-start p-2">


                <SearchBar />


                <img src={Grid} className="ml-8 mr-5 mt-3 s:hidden lg:block" alt="grid" onClick={onClick} />
                <img src={Bell} className="lg:mr-5 s:ml-3 mt-3" alt="bell" />

                <Avatar src={User} />


            </div>








        </nav>
    )
}
export default TopNav