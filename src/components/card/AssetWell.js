import React from 'react'
import BodyText from '../typography/BodyText'
const AssetWell = () => {
    return (
        <div className='rounded bg-white border border-gray-400 flex flex-col w-1/4 p-3 ' >
            <div className='flex justify-between '>
                <BodyText>Needs review</BodyText>
                <BodyText className='w-4 h-5 text-white text-center bg-yellow-500 mr-2'>3</BodyText>
            </div>
            <div className='flex justify-between '>
                <BodyText>Urgent attention</BodyText>
                <BodyText className='w-4 h-5 text-white text-center bg-red-500 mr-2'>1</BodyText>
            </div>
        </div >
    )
}

export default AssetWell