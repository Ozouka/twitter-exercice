import React from 'react'
import Tweet from './Tweet'
import TopHeadTwitter from './TopHeadTwitter'
import CreateTweet from './CreateTweet'
import Trending from './Trending'
import Searchbar from './Searchbar'
import SuggestFollow from './SuggestFollow'

const Main = () => {
  return (
        <main>
            <div className='main-container'>
                <TopHeadTwitter/>
                <CreateTweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
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