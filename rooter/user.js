// importation du module express
const e = require('express');
const express = require('express');


// Creation d'un routeur express
const router = express.Router();


const data = [
  {
    id: 1,
    name: "franck",
    email: "franck@yahoo.com"
  },
  {
    id: 2,
    name: "Thierno",
    email: "Thierno@yahoo.com",
  },
  {
    id: 3,
    name: "Marguerite",
    email: "Marguerite@yahoo.com",
  },
  {
    id: 4,
    name: "Celia",
    email: "Celia@yahoo.com",
  },
  {
    id: 5,
    name: "Jocelyn",
    email: "Jocelyn@yahoo.com",
  },
  {
    id: 6,
    name: "Xavier",
    email: "Xavier@yahoo.com",
  },
  {
    id: 7,
    name: "Bouba",
    email: "Bouba@yahoo.com",
  },
  {
    id: 8,
    name: "Kevin",
    email: "Kevin@yahoo.com",
  },
  {
    id: 9,
    name: "Rachida",
    email: "Rachida@yahoo.com",
  },
  {
    id: 10,
    name: "Francis",
    email: "Francis@yahoo.com",
  },
  {
    id: 11,
    name: "Djamal",
    email: "Djamal@yahoo.com",
  },
  {
    id: 12,
    name: "Richard",
    email: "Richard@yahoo.com",
  },
  {
    id: 13,
    name: "Virginie",
    email: "Virginie@yahoo.com",
  },
  {
    id: 14,
    name: "Noran",
    email: "Noran@yahoo.com",
  },
  {
    id: 15,
    name: "David",
    email: "David@yahoo.com",
  },
  {
    id: 16,
    name: "Aaron",
    email: "Aaron@yahoo.com",
  },
  {
    id: 17,
    name: "Geraldine",
    email: "Geraldine@yahoo.com",
  },
];

// les quatres endpoins principaux pour la gestion des utilisateurs/articles
// GET - pour Récupérer la liste des utilisateurs
// POST - pour Créer un nouvel utilisateur
// UPTDATE - pour Mettre à jour un utilisateur
// DELETE - pour Supprimer un utilisateur

// les endpoints prends deux paramètres: 
// 1. le chemin de l'endpoint
// 2. une fonction callback avec deux paramètres req et res

router.get('/all', (req, res)=>{
    try{

        // le language intermediaire entre le front et le back c'est le JSON

        res.status(200).json(data);

    } catch(error){
        console.log(error.message);
    }
})

router.post('/add', (req, res)=>{
    try{
        // ajouter un utilisateur dans notre objet data
        // data.push({
        //     id: 18,
        //     name: "Jonathan",
        //     email: "test@gmail.com"
        // })
        // res.status(201).json(data);

        const {id, name, email} = req.body;

        data.push({id, name, email});

        res.status(201).json({message: 'user ajouté', data});

    } catch(error){
        console.log(error.message);
    }
})

// res pour response et req pour request
router.put('/update/:id', (req, res)=>{
    try{
        // mettre a jour un utilisateur dans notre objet data
        const idUser = req.params.id;
        // const {id} = req.params;
        const {name} = req.body;

        // 1 verifie si l'utilisateur existe avec la method some 

        const checkuser = data.some(user => user.id === parseInt(idUser));

        console.log('checkuser', checkuser);

        // 2 - si l'utilisateur n existe pas, renvoie une erreur 404
        if(!checkuser){
            return res.status(404).json({message: 'user non trouvé'});
        }

        // 3 - trouve l'utilisareur et modifie son nom
        if(checkuser){
            // trouve l'utilisateur a modifier
            data.forEach(user => {
                if(user.id == idUser){
                    user.name = name;
                    res.status(200).json({message: 'user modifié', user});
                }
        })}
        // 4 - renvoie la reponse avec le status 200 et le user modifié



    }catch(error){
        console.log(error.message);
    }
})

router.delete('/delete/:id', (req, res)=>{
    try{
        const idUser = req.params.id;
        const checkuser = data.some(user => user.id === parseInt(idUser));
        if(!checkuser){
            return res.status(404).json({message: 'user non trouvé'});
        }
        // filtre les utilisateurs pour supprimer celui avec l'id donné
        const newData = data.filter(user => user.id !== parseInt(idUser));
        newData;
        res.status(200).json({message: 'user supprimé', newData});
    }catch(error){
        console.log(error.message);
    }
})

// exportation du routeur pour l'utiliser dans d'autres fichiers

module.exports = router;

// la destructuration d'un objet



