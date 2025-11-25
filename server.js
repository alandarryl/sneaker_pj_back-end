const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config();

// MIDDLEWARE 
app.use(express.json()); // Pour parser le corps des requêtes en JSON


// ROUTES
const sneakersRouter = require('./rooter/sneakers.router');
// const articleRouter = require('./rooter/article');
const utilisateursRouter = require('./rooter/utilisateurs.router');

const messageRouter = require("./rooter/messages.router");

//MONGO DB CONNECTION

mongoose
    .connect(process.env.MONGO_URI,{dbName: process.env.DB_NAME} )
    .then(()=>console.log("connection successful to mongodb"))
    .catch((error)=> console.log("error de connection to mongo db", error))


// PORT

const PORT = process.env.PORT || 8080;

// PREFIX

app.use("/api/sneakers", sneakersRouter);
// app.use("/api/article", articleRouter);
app.use("/api/utilisateur", utilisateursRouter);

app.use("/api/message", messageRouter);



// LISTEN
app.listen(PORT, ()=>{
    console.log(`listen a http://localhost:${PORT}`);
})



// postmon parmet de tester les API et routes HTTP

// nom a mettre dans postman : http://localhost:8000/api/user/all


