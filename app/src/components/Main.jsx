import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import TopHeadTwitter from './TopHeadTwitter'
import CreateTweet from './CreateTweet'
import Trending from './Trending'
import Searchbar from './Searchbar'
import SuggestFollow from './SuggestFollow'
import {TweetContext} from './TweetContext'

const Main = () => {

  const [backEndData, setBackEndData]  = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/allpost');
          const data = await response.json();
          setBackEndData(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };   
  
      fetchData();

    }, []);   

  return (
        <main>
            <div className='main-container'>
                <TopHeadTwitter/>
                <TweetContext.Provider>
                    <CreateTweet />
                </TweetContext.Provider>
                {backEndData && backEndData.map((tweetData, index) => (
                  <TweetContext.Provider key={index} value={tweetData}>
                    <Tweet />
                  </TweetContext.Provider>
                ))} 
            </div>
            <div className="trending-container">
              <Searchbar/>
              <Trending/>
              <div className="container-suggest-follow">
                <div className="head-sf">
                  <span className='sf-h1'>Who to follow</span>
                </div>
                <SuggestFollow/>
                <SuggestFollow/>
                <SuggestFollow/>
              </div>
            </div>
        </main>
  )
}

export default Main