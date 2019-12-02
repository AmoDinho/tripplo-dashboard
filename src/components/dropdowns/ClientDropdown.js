import React from 'react'
import CorpImg from '../../assets/White_block.svg'
import Chevron from '../../assets/chevroon_down.svg'
import BodyText from '../typography/BodyText'
/*

To-Do:

<select
                aria-label='dropdown-select'
                className={`${className} p-4 w-3/4 bg-gray-100 rounded`}
                {...props}
            >
                {children}
            </select>

Add correct background colour
*/
const ClientDropdown = ({ className, children, ...props }) => {
    return (
        <>

            <button
                aria-label='dropdown-select'
                className='flex flex-row  p-4 pr-10  bg-gray-100 rounded'>
                <img src={CorpImg} alt='Dropdown-option' className="w-2/4 h-2/4" /> <BodyText className="mb-2 ml-3">Interssol</BodyText> <img className="ml-12" src={Chevron} alt='Chevron' />
            </button>




        </>
    )
}

export default ClientDropdown