import React from 'react'
import TrendingText from './TrendingText'

const Trending = () => {
  return (
    <div className="container-trending">
      <div className="head-trending">
        <span className='trend-h1'>Trends for you</span>
      </div>
      <div className="content-trending">
        <TrendingText/>
        <TrendingText/>
        <TrendingText/>
        <TrendingText/>
        <TrendingText/>
        <TrendingText/>
        <TrendingText/>
        <TrendingText/>
      </div>
    </div>
  )
}

export default Trending