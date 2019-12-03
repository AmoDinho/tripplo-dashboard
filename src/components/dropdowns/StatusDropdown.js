import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


const StatusDropdown = () => {
    return (
        <Dropdown >
            <div>Active</div>
            <Dropdown.Toggle split />
            <Dropdown.Menu>
                <Dropdown.Item>Active</Dropdown.Item>
                <Dropdown.Item>Inactive</Dropdown.Item>
                <Dropdown.Item>Pending</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown >
    )
}

export default StatusDropdown