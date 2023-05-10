import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHashtag, faMessage, faList, faBookmark, faUser, faHome, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../App.css'
import NavAccoutSwitch from './NavAccoutSwitch'

const Navbar = () => {
  return (
    <div className='button-style'>      
        <ul>
            {/* Possibilité de faire un composant pour tout ça pour éviter la redondance à voir plus tard */}
            <li><a href='#'><FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "rgb(29, 155, 240)",}} /></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faHome}/><span className="button-text-home">Home</span> </a></li>
            <li><a href='#'><FontAwesomeIcon icon={faHashtag}/><span className="button-text"> Explore</span></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faBell}/><span className="button-text"> Notifications</span></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faMessage}/><span className="button-text"> Messages</span></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faList}/><span className="button-text"> Lists</span></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faBookmark}/><span className="button-text"> Bookmarks</span></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faTwitter}/><span className="button-text"> Twitter Blue</span></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faUser}/><span className="button-text"> Profile</span></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faEllipsis}/><span className="button-text"> More</span></a></li>
        </ul>
        <button className='tweet-button'>Tweet</button>

        <NavAccoutSwitch/>
    </div>
  )
}

export default Navbar