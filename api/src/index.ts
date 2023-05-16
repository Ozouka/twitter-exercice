import express from 'express';
const app = express();

app.get('/',(req,res) => {
    res.json({
        "tweet1" : {"username" : "Karim", "hashtag": "@Karim_Zwl","img": "./src/images/default_profile_400x400.png","content":"Aujourd'hui il fait plutôt beau"}
    })
 })

app.listen(3000 ,() => console.log("Test application"));