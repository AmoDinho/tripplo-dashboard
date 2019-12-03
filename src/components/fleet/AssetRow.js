import React from 'react'
import AssetCard from '../card/AssetCard'
import AssetWell from '../card/AssetWell'
const AssetRow = () => {
    return (
        <>
            <div>
                <AssetCard assetName='Truck' assetColour='500' assetCount='4' />
                <AssetWell />
            </div>
        </>
    )
}

export default AssetRow