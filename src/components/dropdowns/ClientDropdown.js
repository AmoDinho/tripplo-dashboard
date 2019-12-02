import React from 'react'

const ClientDropdown = ({ className, childern, ...props }) => {
    return (
        <>
            <select
                aria-label='dropdown-select'
                className={`${className} p-4 w-3/4 bg-gray-100 rounded`}
                {...props}
            >
                {childern}
            </select>

        </>
    )
}

export default ClientDropdown