import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faGift, faLocation } from '@fortawesome/free-solid-svg-icons';

const CreateTweet = () => {

  const [content, setContent] = useState('');

  const user1 = { username: 'Karim', hashtag: '@Karim_Zwl', img: './src/images/default_profile_400x400.png'}

  const submitData = async () => {
    const myData = {
      id: 5,
      username: 'Karim',
      hashtag: '@Karim_Zwl',
      img: './src/images/default_profile_400x400.png',
      content: content,
    };
    try {
      const response = await fetch('http://localhost:3000/api/publication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handle = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="create-tweet">
      <div className="creat-tweet-container">
        <div className="content-left">
          <img src={user1.img} alt="Image utilisateur" />
        </div>
        <div className="content-right">
          <div className="content-tweet">
            <textarea onChange={handle} id="content" placeholder="What's happening?" name="text"></textarea>
          </div>
          <div className="content-right-bottom">
            <div className="tweet-option">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faImage} color="rgb(29, 155, 240)" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faGift} color="rgb(29, 155, 240)" />
                </li>
                <li>Poll</li>
                <li>Emoji</li>
                <li>Schedule</li>
                <li>
                  <FontAwesomeIcon icon={faLocation} color="rgb(29, 155, 240)" />
                </li>
              </ul>
            </div>
            <div className="button-tweet">
              <button onClick={submitData}>Tweet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTweet;
