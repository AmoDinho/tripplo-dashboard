import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


const StatusDropdown = () => {
    return (
        <Dropdown className='flex flex-row' >
            <div className='bg-green-600 text-white p-1'>Active</div>
            <Dropdown.Toggle variant='secondary' split />
            <Dropdown.Menu >
                <Dropdown.Item>Active</Dropdown.Item>
                <Dropdown.Item>Inactive</Dropdown.Item>
                <Dropdown.Item>Pending</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown >
    )
}

export default StatusDropdown