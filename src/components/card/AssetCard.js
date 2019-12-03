import React from 'react'
import HeadingTwo from '../typography/HeadingTwo'
const AssetCard = ({ assetName, assetColour, assetCount }) => {
    return (
        <>
            <div className={`bg-blue-${assetColour}  h-24 rounded flex justify-between`}>
                <HeadingTwo className='text-gray-400 ml-2'>
                    {assetName}
                </HeadingTwo>
                <HeadingTwo className='text-white mr-2'>
                    {assetCount}
                </HeadingTwo>
            </div>
        </>
    )
}

export default AssetCard