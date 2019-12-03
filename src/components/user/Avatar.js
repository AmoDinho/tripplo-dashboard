import React from 'react'

const Avatar = ({ src, ...props }) => {
    return (
        <>
            <img
                className="rounded-full w-1/5 h-1/5"
                src={src} alt='user-avatar' />
        </>
    )
}

export default Avatar