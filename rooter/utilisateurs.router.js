

// Importation du module express
const express = require('express');

// creation d'un routeur express
const router = express.Router();

const ModelsUser = require('../models/users.model');
// const { route } = require('./sneakers.router');


// ajouter un nouvelle user
router.post('/add/', async (req, res)=>{
    try{

        const {username, email, password} = req.body;

        const allUsers = await ModelsUser.find();

        const exist = allUsers.some((user)=> user.email == email);

        if(exist){
            return res.status(400).json({message: 'utilisateur déjà existant'});
        } else {
            const newUser = new ModelsUser({
                username,
                email,
                password
            });

            if(!username || !email || !password){
                return res.status(400).json({message: 'tous les champs sont obligatoires'});
            }

            newUser.save();
            res.status(201).json('utilisateur ajouté avec succès');
        }

    } catch(error){
        res.status(500).json(error.message);
    }
})

// get all users 
router.get("/users", async (req, res)=>{
    try{
        const users = await ModelsUser.find();
        res.status(200).json(users);

    } catch(error){
        console.log("error dans la recuperation des utilisateurs", error);
    }
})

// delete a targeted user by id
router.delete("/delete/:id", async(req, res)=>{

    try{
        

        const idUser = req.params.id;

        await ModelsUser.findByIdAndDelete(idUser);

        res.status(200).json({message: 'utilisateur supprimé'});

        if(!idUser){
            return res.status(404).json({message: 'utilisateur non trouvé'});
        }


    } catch(error){
        console.log("error de suppression", error)
    }


})


// find a user by id
router.get("/find/:id", async(req, res)=>{
    try{
        const idUser = req.params.id;

        const user = await ModelsUser.findById(idUser);

        if(!idUser){
            return res.status(404).json({message: 'utilisateur non trouvé'});
        }

        const allUsers = await ModelsUser.find();

        const exist = allUsers.some((user)=> user._id == idUser);

        if(!exist){
            return res.status(404).json({message: 'utilisateur non trouvé'});
        } else {
            return res.status(201).json({message: `utilisateur trouvé ${exist}`, user});
        }

    } catch(error){
        // console.log("error de recherche d'un utilisateur", error);
        return res.status(500).json({message: 'erreur serveur'})
    }
})

// modifier un user par id 

router.put("/update/:id", async(req, res)=>{
    try{
        //

        const idUser = req.params.id;
        const {username, email, password} = req.body;

        if(!idUser){
            return res.status(404).json({message: 'utilisateur non trouvé'});
        }

        const updatedUser = await ModelsUser.findByIdAndUpdate(
            idUser,
            {username},
            {new: true}
        );

        res.status(200).json({message: 'utilisateur modifié', updatedUser});


    } catch(error){
        res.status(500).json({message: 'erreur de serveur'})
        console.log("error de modification d'un utilisateur", error);
    }
})


module.exports = router;


// racourci important ctrl + d


// rajouter un model message

// mettre en place un model message qui va contenir une propriété content et une propriété user 
// le type de message doit etre string et le message obliglatoire 

