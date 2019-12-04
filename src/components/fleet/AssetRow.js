import React from 'react'
import AssetCard from '../card/AssetCard'
import AssetWell from '../card/AssetWell'
import { assets } from '../../utils/assets'
const AssetRow = () => {
    console.log(assets)
    return (
        <>
            <div className="flex lg:flex-row s:flex-col">
                {
                    assets.map(ass => {
                        return (

                            <div className="flex flex-col lg:w-2/4 p-5" key={ass.id}>
                                <AssetCard assetName={ass.assetName} assetColour={ass.assetColour} assetCount={ass.assetCount} />
                                <AssetWell />
                            </div>


                        )
                    })
                }
            </div>


        </>
    )
}

export default AssetRow