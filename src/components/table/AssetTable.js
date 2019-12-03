import React from 'react'
import Table from 'react-bootstrap/Table'
import StatusDropdown from '../dropdowns/StatusDropdown'
import BodyText from '../typography/BodyText'
import 'bootstrap/dist/css/bootstrap.min.css'
const AssetTable = () => {
    return (
        <>
            <div className='p-4'>
                <div className='flex flex-row'>
                    <div className='bg-blue-700 w-1/12 h-16 rounded-t text-center p-3'> <BodyText className="text-white">Truks</BodyText></div>
                    <diV className='bg-blue-200 w-full h-16 rounded-t p-3 p-3 '> <BodyText className="text-gray-600 ">Issues</BodyText></diV>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Truck</th>
                            <th>Truck details</th>
                            <th>Driver</th>
                            <th>Trailer(s)</th>
                            <th>Status</th>
                            <th colSpan='2'>Issues</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> VBZ 122 GP</td>
                            <td> 2005 Frieghtliner Argsoy ISX 530</td>
                            <td> Lovemore Buzuzi</td>
                            <td> - </td>
                            <td> <StatusDropdown /></td>
                            <td> Review 0</td>
                            <td> Urgent 0</td>
                        </tr>
                    </tbody>

                </Table>

            </div>
        </>
    )
}

export default AssetTable