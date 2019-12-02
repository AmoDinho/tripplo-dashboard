import React from 'react'
import TripploLogo from '../../assets/tripplo-logo-white.png'
import BodyText from '../typography/BodyText'
import OrgIcon from '../../assets/view_compact.svg'
import ProfitIcon from '../../assets/signal_cellular_alt.svg'
import DateIcon from '../../assets/date_range.svg'
import TruckIcon from '../../assets/local_shipping.svg'
import CardIcon from '../../assets/credit_card.svg'
import TrackingIcon from '../../assets/pin_drop.svg'
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
                        <li className="flex flex-row p-2">
                            <img src={OrgIcon} alt="org icon" className="mr-2" />    <BodyText className="text-white">My orginization</BodyText>
                        </li>
                        <li >
                            <div className="flex flex-row mt-3 border-l-4 block p-2 ">
                                <img src={TruckIcon} alt="org icon" className="mr-2 " />    <BodyText className="text-white ">Fleet</BodyText>
                            </div>
                        </li>
                        <li className="flex flex-row mt-3 p-2">
                            <img src={DateIcon} alt="org icon" className="mr-2" />    <BodyText className="text-white">Trip planning</BodyText>
                        </li>
                        <li className="flex flex-row mt-3 p-2">
                            <img src={TrackingIcon} alt="org icon" className="mr-2" />    <BodyText className="text-white">Trip tracking</BodyText>
                        </li>
                        <li className="flex flex-row mt-3 p-2">
                            <img src={ProfitIcon} alt="org icon" className="mr-2" />    <BodyText className="text-white">Profit analysis</BodyText>
                        </li>
                        <li className="flex flex-row mt-3 p-2">
                            <img src={CardIcon} alt="org icon" className="mr-2" />    <BodyText className="text-white">Biling</BodyText>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav 