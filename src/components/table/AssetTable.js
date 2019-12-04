import React from 'react'
import Table from 'react-bootstrap/Table'
import StatusDropdown from '../dropdowns/StatusDropdown'
import BodyText from '../typography/BodyText'
import 'bootstrap/dist/css/bootstrap.min.css'
import Truck from '../../assets/truck.jpg'
import Avatar from '../user/Avatar'
import Drag from '../../assets/drag_indicator.svg'
const AssetTable = () => {
    return (
        <>
            <div className='p-4'>
                <div className='flex flex-row'>
                    <div className='bg-blue-700 w-1/12 h-16 rounded-t text-center p-3'> <BodyText className='text-white'>Trucks</BodyText></div>
                    <div className='bg-blue-200 w-full h-16 rounded-t p-3 p-3 '> <BodyText className='text-gray-600 '>Issues</BodyText></div>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Truck</th>
                            <th>Truck details</th>
                            <th>Driver</th>
                            <th className='s:hidden lg:table-cell'>Trailer(s)</th>
                            <th className='s:hidden lg:table-cell'>Status</th>
                            <th className='s:hidden lg:table-cell' colSpan='2'>Issues</th>
                            <th className='s:hidden lg:table-cell'><img src={Drag} alt='drag' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='flex lg:flex-row s:flex-col'> <Avatar src={Truck} /> VBZ 122 GP</td>
                            <td> 2005 Frieghtliner Argsoy ISX 530</td>
                            <td> Lovemore Buzuzi</td>
                            <td className='s:hidden lg:table-cell'> - </td>
                            <td className='s:hidden lg:table-cell'> <StatusDropdown /></td>
                            <td className='s:hidden lg:table-cell'> Review  <BodyText className='w-4 h-5 text-white text-center bg-gray-500 mr-2 rounded'>0</BodyText></td>
                            <td className='s:hidden lg:table-cell'> Urgent <BodyText className='w-4 h-5 text-white text-center bg-gray-500 mr-2 rounded'>0</BodyText></td>
                            <td className='s:hidden lg:table-cell'><img src={Drag} alt='drag' /></td>
                        </tr>
                    </tbody>

                </Table>

            </div>
        </>
    )
}

export default AssetTable