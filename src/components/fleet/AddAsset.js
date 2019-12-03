import React from 'react'
import BlueButton from '../buttons/BlueButton'
import HeadingOne from '../typography/HeadingOne'
const AddAsset = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-ro ml-20">
                    <HeadingOne>Fleet Management</HeadingOne>
                    <BlueButton>Add Asset</BlueButton>
                </div>
                <hr className="w-4/5 ml-20" />
            </div>

        </>
    )
}
export default AddAsset