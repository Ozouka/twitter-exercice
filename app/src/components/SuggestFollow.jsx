import React from 'react'

const SuggestFollow = () => {
    const user1 = {
        username : "Karim",
        hashtag: "@Karim_Zwl",
        img: "./src/images/default_profile_400x400.png"
    }

  return (
    <div className='container-sf'>
      <div className="content-sf">
        <div className='img-sf'>
            <img src={user1.img} alt="Image de profile"/>
        </div>
        <div className='text-sf'>
            <div className="username-sf">
                <p>{user1.username}</p>
            </div>
            <div className="id-sf">
                <p>{user1.hashtag}</p>
            </div>
        </div>
        <div className='button-sf'>
            <button>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default SuggestFollow