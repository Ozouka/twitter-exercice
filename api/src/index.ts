import express from 'express';
const app = express();

app.get('/',(req,res) => {
    res.json([
        {
          "id": 0,
          "username": "Karim",
          "hashtag": "@Karim_Zwl",
          "img": "./src/images/default_profile_400x400.png",
          "content": "Aujourd'hui il fait plutôt beau"
        },
        {
          "id": 1,
          "username": "Karim",
          "hashtag": "@Karim_Zwl",
          "img": "./src/images/default_profile_400x400.png",
          "content": "La métropole de Lyon va instaurer la semaine de 4 jours à partir du 1er septembre 💼"
        },
        {
            "id": 2,
            "username": "Karim",
            "hashtag": "@Karim_Zwl",
            "img": "./src/images/default_profile_400x400.png",
            "content": "Aujourd'hui Mathieu va finir Twitter"
          },
          {
            "id": 3,
            "username": "Karim",
            "hashtag": "@Karim_Zwl",
            "img": "./src/images/default_profile_400x400.png",
            "content": "Est-il vrai que l'heure actuel n'est jamais jamais l'heure actuel ?"
          },
          {
            "id": 4,
            "username": "Karim",
            "hashtag": "@Karim_Zwl",
            "img": "./src/images/default_profile_400x400.png",
            "content": "Chaque instant passé était un instant futur"
          }
      ]);
 })

 app.post('/',(req,res) => {
    res.json({
        "tweet1" : {"username" : "Karim", "hashtag": "@Karim_Zwl","img": "./src/images/default_profile_400x400.png","content":"Aujourd'hui il fait plutôt beau"}
    })
 })

app.listen(3000 ,() => console.log("L'application fonctionne bien"));