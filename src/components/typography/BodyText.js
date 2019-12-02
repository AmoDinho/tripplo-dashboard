import React from 'react'

const BodyText = ({ className, children, ...props }) => {
    return (
        <>
            <p {...props} className={`${className} font-sans text-base`}>{children}</p>
        </>
    )
}

export default BodyText