const express = require('express');
const router = express.Router();

//let pets = require('../json/pets')

const db = require('../db/models');
const Pet = db.Pet;

/* GET home page. */
router.get('/', (req, res) => {
    Pet.findAll().then(pets => {
         
        res.render('pets-index', { pets });
    })

});

module.exports = router;
