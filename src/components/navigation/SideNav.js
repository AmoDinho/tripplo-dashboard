import React from 'react'
import TripploLogo from '../../assets/tripplo-logo-white.png'
import BodyText from '../typography/BodyText'
const SideNav = () => {
    return (
        <>
            <div className="bg-blue-600 h-screen w-1/5">

                {/* */}

                {/*Tripplo logo */}

                <div className="p-5"><img src={TripploLogo} className="w-1/2 " alt="tripplo logo" /></div>
                {/* customer dropdown*/}

                {/* Nav options*/}
                <div>
                    <ul >
                        <li>
                            <BodyText>My orginization</BodyText>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav 