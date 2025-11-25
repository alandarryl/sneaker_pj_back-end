// importation du module express
const express = require('express');
// Creation d'un routeur express
const router = express.Router();

const sneakersData = require('../data.json');

// ### Route 1 : Obtenir toutes les données### Route 1 : Obtenir toutes les données

router.get('/all', (req, res)=>{

    try{
        // obtenir tous les données

    res.status(200).json({
        success: true,
        data: sneakersData
    })
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Erreur serveur"
        })
    }
})

// ### Route 2 : Obtenir le détail d'une sneaker par ID

router.get('/detail/:id', (req, res)=>{
    try{
    const sneakerId = parseInt(req.params.id);
    const checkExist = sneakersData.some(sneaker => sneaker.id === sneakerId);

    if(!checkExist){
        return res.status(404).json({message: 'sneaker non trouvée'});
    }

    const sneakerDetail = sneakersData.find(sneaker => sneaker.id === sneakerId);

    res.status(200).json({
        success: true,
        data: sneakerDetail
    });

    } catch(error){
    
    console.log(error.message);
}
}
) 

// ### Route 3 : Obtenir les sneakers pour femmes 

router.get('/category/femme', (req, res)=>{
    try{
    const femmeSneakers = sneakersData.filter(sneaker => sneaker.category.toLowerCase() === 'f');
    res.status(200).json({
        success: true,
        data: femmeSneakers
    });
    } catch(error){
    console.log(error.message);
    }
})

// ### Route 4 : Obtenir les sneakers pour hommes 

router.get('/category/homme', (req, res)=>{
    try{
    const hommeSneakers = sneakersData.filter(sneaker => sneaker.category.toLowerCase() === 'h');
    res.status(200).json({
        success: true,
        data: hommeSneakers
    });
    } catch(error){
    console.log(error.message);
    }
})

// ### Route 5 : Obtenir les sneakers par genre 

router.get('/genre/:genre', (req, res)=>{

    try{
    const genre = req.params.genre.toLowerCase();

    if(genre !== 'homme' && genre !== 'femme'){
        return res.status(400).json({message: 'genre invalide, utilisez "h" ou "f"'});
    } else if(genre === 'homme' || genre === 'femme'){
        const genreSneakers = sneakersData.filter(sneaker => sneaker.category.toLowerCase() === genre || sneaker.category.toLowerCase() === "mixe");
        return res.status(200).json({
            success: true,
            data: genreSneakers
        })
    } 



    } catch(error){
        console.log(error.message);
    }

})

// ### Route 6 : Supprimer une sneaker par ID 

router.delete('/delete/:id', (req, res)=>{
    try{
    const sneakerId = parseInt(req.params.id);
    const checkExist = sneakersData.some(sneaker => sneaker.id === sneakerId);
    if(!checkExist){
        return res.status(404).json({message: 'sneaker non trouvée'});
    }

    const newSneakersData = sneakersData.filter(sneaker => sneaker.id !== sneakerId);

    res.status(200).json({
        success: true,
        message: 'sneaker supprimée',
        data: newSneakersData
    });
} catch(error){
    console.log(error.message);
}
})

// ### Route 7 (Bravo t'es un G.O.A.T) : Mettre à jour l'état "online" d'une sneaker par ID 

router.put('/update/:id', (req, res)=>{

    try{
    const sneakerId = parseInt(req.params.id);
    const {online} = req.body;
    const checkExist = sneakersData.some(sneaker => sneaker.id === sneakerId);
    if(!checkExist){
        return res.status(404).json({message: 'sneaker non trouvée'});
    }

    sneakersData.forEach(sneaker=>{
        if(sneaker.id === sneakerId){
            sneaker.online = online;
            return res.status(200).json({
                success: true,
                message: 'sneaker mise à jour',
                data: sneaker
            });
        }
    })


    } catch(error){
    console.log(error.message);
    }


})

module.exports = router;
