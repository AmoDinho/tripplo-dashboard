import React from 'react'

const Table = () => {
    return (
        <>
            <div>
                <div>Truks</div>
                <diV>Issues</diV>
            </div>
            <table>
                <tr>
                    <th>Truck</th>
                    <th>Truck details</th>
                    <th>Driver</th>
                    <th>Trailer(s)</th>
                    <th>Status</th>
                    <th colSpan="2">Issues</th>
                </tr>
            </table>

        </>
    )
}

export default Table