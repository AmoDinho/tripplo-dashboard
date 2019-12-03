import React from 'react'
const BlueButton = ({ children }) => {
    return (
        <>
            <button
                className='py-2 px-4'
                aria-label='blue-button'
            >
                {children}
            </button>
        </>
    )
}

export default BlueButton