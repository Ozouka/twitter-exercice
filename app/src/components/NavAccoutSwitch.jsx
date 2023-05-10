import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'


const NavAccoutSwitch = () => {
  return (
    <div className='container-account-switch'>
        <div className='img-account-switch'>
            IMAGE
        </div>
        <div className='text-account-switch'>
            <div className="username-account-switch">
                <p>Karim</p>
            </div>
            <div className="id-account-switch">
                <p>@Karim_Zwl</p>
            </div>
        </div>
        <div className='ellipsis-account-switch'>
            <FontAwesomeIcon icon={faEllipsis}/>
        </div>
    </div>
  )
}

export default NavAccoutSwitch