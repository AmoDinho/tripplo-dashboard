import React from 'react'
import TripploLogo from '../../assets/tripplo-logo-white.png'
import BodyText from '../typography/BodyText'
import OrgIcon from '../../assets/view_compact.svg'
const SideNav = () => {
    return (
        <>
            <div className="bg-blue-600 h-screen w-1/5">

                {/* */}

                {/*Tripplo logo */}

                <div className="p-5"><img src={TripploLogo} className="w-1/2 " alt="tripplo logo" /></div>
                {/* customer dropdown*/}

                {/* Nav options*/}
                <div className="p-4">
                    <ul >
                        <li className="flex flex-row">
                            <img src={OrgIcon} alt="org icon" className="mr-2" />    <BodyText className="text-white">My orginization</BodyText>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav 