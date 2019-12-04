import React from 'react'
const Avatar = ({ src, ...props }) => {

    return (
        <>
            <img
                className="rounded-full w-45 h-1/5 border border-gray-600"
                src={src} alt='user-avatar' />
        </>
    )
}

export default Avatar