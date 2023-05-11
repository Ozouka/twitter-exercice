import React from 'react'
import Tweet from './Tweet'
import TopHeadTwitter from './TopHeadTwitter'
import CreateTweet from './CreateTweet'
import Trending from './Trending'
import Searchbar from './Searchbar'

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
            </div>
        </main>
  )
}

export default Main