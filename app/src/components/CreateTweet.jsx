import React from 'react'

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
          <textearea placeholder="What's happening ?">What's happening?</textearea>
        </div>
        <div className="content-right-bottom">
          <div className="tweet-option">

          </div>
          <div className="button-tweet">

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTweet