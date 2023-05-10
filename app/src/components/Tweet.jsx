import React from 'react'

const Tweet = () => {

    const user1 = {
        username : "Karim",
        hashtag: "@Karim_Zwl",
        img: "./src/images/default_profile_400x400.png"
    }

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
                    <img src={user1.img} alt="User image"/>
                </div>
                <div className="user-description">
                    <h2>{user1.username}</h2>
                    <p>{user1.hashtag} · {currentDate()}</p>
                </div>
            </div>
            <div className="tweet-content">
                <span>La métropole de Lyon va instaurer la semaine de 4 jours à partir du 1er septembre 💼</span>
                <img src="./src/images/lyon.png" alt="Image de Lyon"/>
            </div>
        </article>
    </div>
  )
}

export default Tweet