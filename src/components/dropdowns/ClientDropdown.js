import React from 'react'
/*

To-Do:

Add correct background colour
*/
const ClientDropdown = ({ className, childern, ...props }) => {
    return (
        <>
            <select
                aria-label='dropdown-select'
                className={`${className} p-4 w-3/4  rounded`}
                {...props}
            >
                {childern}
            </select>

        </>
    )
}

export default ClientDropdown