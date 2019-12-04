import React from 'react'

const HeadingOne = ({ children }) => {
    return (
        <>
            <h1 className="font-sans lg:text-4xl s:text-xl">{children}</h1>
        </>
    )
}

export default HeadingOne