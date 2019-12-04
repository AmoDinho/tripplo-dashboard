import React from 'react'
const BlueButton = ({ children }) => {
    return (
        <>
            <button
                className='py-1 px-6  bg-blue-600 rounded text-white'
                aria-label='blue-button'
            >
                {children}
            </button>
        </>
    )
}

export default BlueButton