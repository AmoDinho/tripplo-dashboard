import React from 'react'

const ClientDropdown = ({ className, childern, ...props }) => {
    return (
        <>
            <select
                aria-label='dropdown-select'
                className={`${className}`}
                {...props}
            >
                {childern}
            </select>

        </>
    )
}

export default ClientDropdown