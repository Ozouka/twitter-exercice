import express from 'express';
const app = express();

const fakeDataBase = [
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
      "content": "Est-il vrai que l'heure actuel n'est jamais l'heure actuel ?"
    },
    {
      "id": 4,
      "username": "Karim",
      "hashtag": "@Karim_Zwl",
      "img": "./src/images/default_profile_400x400.png",
      "content": "Chaque instant passé était un instant futur"
    }
]


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/allpost',(req,res) => {
    res.json(fakeDataBase);
 })

 app.use(express.json()); 
 
export interface ITweetData{
  id: number,
  username: string,
  hashtag: string,
  img: string,
  content:string  
}

 app.post('/api/publication', (req, res) => {
   const tweetData: ITweetData = req.body;

   fakeDataBase.push(tweetData);

   console.log(fakeDataBase);

   res.json(tweetData);
 });

 
app.listen(3000 ,() => console.log("L'application fonctionne bien"));