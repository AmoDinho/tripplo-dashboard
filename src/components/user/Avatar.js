import React from 'react'
import { defaultCipherList } from 'constants'
const Avatar = ({ src, ...props }) => {
    return (
        <>
            <img src={src} alt='user-avatar' />
        </>
    )
}

export default Avatar