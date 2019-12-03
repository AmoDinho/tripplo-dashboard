import React from 'react'
import Table from 'react-bootstrap/Table'

const AssetTable = () => {
    return (
        <>
            <div>
                <div>Truks</div>
                <diV>Issues</diV>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Truck</th>
                        <th>Truck details</th>
                        <th>Driver</th>
                        <th>Trailer(s)</th>
                        <th>Status</th>
                        <th colSpan="2">Issues</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> VBZ 122 GP</td>
                        <td> 2005 Frieghtliner Argsoy ISX 530</td>
                        <td> Lovemore Buzuzi</td>
                        <td> - </td>
                        <td> Active</td>
                        <td> Review 0</td>
                        <td> Urgent 0</td>
                    </tr>
                </tbody>

            </Table>

        </>
    )
}

export default AssetTable