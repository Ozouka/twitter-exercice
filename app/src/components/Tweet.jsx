import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faRetweet, faChartSimple, faUpload } from '@fortawesome/free-solid-svg-icons'
import { TweetContext } from './TweetContext'


const Tweet = () => {

    const backEndData = useContext(TweetContext);

    const currentDate = () => {
        let tabMonth = [
            {mois : "Janvier", id : 0},
            {mois : "Février", id : 1},
            {mois : "Mars", id : 2},
            {mois : "Avril", id : 3},
            {mois : "Mai", id : 4},
            {mois : "Juin", id : 5},
            {mois : "Juillet", id : 6},
            {mois : "Août", id : 7},
            {mois : "Septembre", id : 8},
            {mois : "Novembre", id : 9},
            {mois : "Octobre", id : 10},
            {mois : "Décembre", id : 11},
        ]
        let nouvelleDate = new Date()
        let jour = nouvelleDate.getDate();
        let mois = nouvelleDate.getMonth();
        
        const moisATrouver = tabMonth.find(month => month.id === mois);

        const moisEnLettre = moisATrouver ? moisATrouver.mois : '';

        return `${jour}${" "}${moisEnLettre}`
    }

  return (
    <div>
        <article className='article-tweet'>
            <div className="user-general">
                <div className="img-user">
                
                {backEndData ? (
                    <ul>
                        <img key={backEndData.img} src={backEndData.img} alt="Image utilisateur"/>
                    </ul>
                ) : (
                    <p>Chargement...</p>
                )}

                </div>
                <div className="user-description">

                {backEndData ? (
                        <h2 key={backEndData.username}>{backEndData.username}</h2>  
                ) : (
                    <p>Chargement...</p>
                )}

                {backEndData ? (
                        <p key={backEndData.hashtag}>{backEndData.hashtag} · {currentDate()}</p>
                ) : (
                    <p>Chargement...</p>
                )}

                </div>
            </div>
            <div className="tweet-content">
                <span>La métropole de Lyon va instaurer la semaine de 4 jours à partir du 1er septembre 💼</span>
                <img src="./src/images/lyon.png" alt="Image de Lyon"/>
            </div>
            <div className="tweet-tools">
                <div className="tweet-message">
                    <FontAwesomeIcon icon={faMessage} />
                    <span>93</span>
                </div>
                <div className="tweet-rt">
                    <FontAwesomeIcon icon={faRetweet} />
                    <span>1,880</span>
                </div>
                <div className="tweet-like">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>8,514</span>
                </div>
                <div className="tweet-stats">
                    <FontAwesomeIcon icon={faChartSimple} />
                    <span>1,3M</span>
                </div>
                <div className="tweet-share">
                    <FontAwesomeIcon icon={faUpload} />
                </div>
            </div>
        </article>
    </div>
  )
}

export default Tweet