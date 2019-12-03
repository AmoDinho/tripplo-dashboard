import React from 'react'
import BodyText from '../typography/BodyText'
import Search from '../../assets/search.svg'
const SearchBar = () => {
    return (
        <>
            <div className="relative  w-1/5 mr-20 ">
                <input placeholder="Search..." className="bg-gray-200 rounded-full text-left  p-2 " />
                <img src={Search} alt="search-icon" className="absolute right-0 top-0 mt-3 " />

            </div>



        </>
    )
}

export default SearchBar