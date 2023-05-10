import React from 'react'
import Tweet from './Tweet'
import TopHeadTwitter from './TopHeadTwitter'

const Main = () => {
  return (
        <main>
            <div className='main-container'>
                <TopHeadTwitter/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
            </div>
        </main>
  )
}

export default Main