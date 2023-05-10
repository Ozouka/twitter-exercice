import React from 'react'
import Tweet from './Tweet'
import TopHeadTwitter from './TopHeadTwitter'
import CreateTweet from './CreateTweet'

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
        </main>
  )
}

export default Main