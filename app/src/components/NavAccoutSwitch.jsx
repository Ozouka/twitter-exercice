import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'


const NavAccoutSwitch = () => {

    const user1 = {
        username : "Karim",
        hashtag: "@Karim_Zwl",
        img: "./src/images/default_profile_400x400.png"
    }

  return (

    <div className='container-account-switch'>
        <div className='img-account-switch'>            
            <img src={user1.img} alt="Image de profile"/>
        </div>
        <div className='text-account-switch'>
            <div className="username-account-switch">
                <p>{user1.username}</p>
            </div>
            <div className="id-account-switch">
                <p>{user1.hashtag}</p>
            </div>
        </div>
        <div className='ellipsis-account-switch'>
            <FontAwesomeIcon icon={faEllipsis}/>
        </div>
    </div>
  )
}

export default NavAccoutSwitch