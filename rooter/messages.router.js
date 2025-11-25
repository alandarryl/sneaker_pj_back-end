
// Importation du module express
const express = require('express');

// creation d'un routeur express
const router = express.Router();

const ModelMessages = require("../models/messages.model");



// ajouter un message

router.post("/add", async (req, res)=>{
    try{
        const message = await ModelMessages.create(req.body)
        res.status(201).json(message)
    } catch {
        res.status(500).json(error.message)
    }
})


//get pour recuperer les messages d un user 

//use : populate

router.get("/messages/:id", async (req, res)=>{
    try {
        
        //

        const messages = await ModelMessages.find({user : req.params.id}).populate('user', 'username email');

        if(!messages) return res.status(404).json("Message not found")

        res.status(200).json(messages);

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
