import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faGift } from '@fortawesome/free-solid-svg-icons'



const CreateTweet = () => {

  const user1 = {
    username : "Karim",
    hashtag: "@Karim_Zwl",
    img: "./src/images/default_profile_400x400.png"
  }

  return (
    <div className="creat-tweet-container">
      <div className="content-left">
        <img src={user1.img} alt="Image utilisateur"/>
      </div>
      <div className="content-right">
        <div className="content-tweet">
          <textarea placeholder="What's happening?"></textarea>
        </div>
        <div className="content-right-bottom">
          <div className="tweet-option">
            <ul>
              <li><FontAwesomeIcon icon={faImage} color='rgb(29, 155, 240)'/></li>
              <li><FontAwesomeIcon icon={faGift}/></li>
              <li>Poll</li>
              <li>Emoji</li>
              <li>Schedule</li>
              <li>Loc</li>
            </ul>
          </div>
          <div className="button-tweet">
            <button>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTweet