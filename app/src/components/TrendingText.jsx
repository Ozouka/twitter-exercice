import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const TrendingText = () => {
  return (
    <div className="container-trending-text">
        <div className="content-left-tt">
            <div className="theme-tt">
                <p>Trending in France</p>
            </div>
            <div className="subject-tt">
                <h1>Ninho</h1>
            </div>
            <div className="popularity-tt">
                <p>6,843 Tweets</p>
            </div>
        </div>
        <div className="content-right-tt">
            <FontAwesomeIcon icon={faEllipsis}/>
        </div>
    </div>
  )
}

export default TrendingText