import React from 'react'

const HeadingTwo = ({ className, children }) => {
    return (
        <>
            <h1 className={`${className} font-sans text-2xl`}>{children}</h1>
        </>
    )
}

export default HeadingTwo