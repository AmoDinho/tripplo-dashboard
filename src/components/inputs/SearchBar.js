import React from 'react'
import Search from '../../assets/search.svg'
const SearchBar = () => {
    return (
        <>
            <div className="relative mx-auto ">
                <input placeholder="Search..." type="search" className="bg-gray-200 rounded-full text-left  p-2 " />
                <img src={Search} alt="search-icon" className="absolute right-0 top-0 mt-3 mr-4" />

            </div>



        </>
    )
}

export default SearchBar