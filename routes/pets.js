const express = require('express');
const router = express.Router();

// let pets = require('../json/pets')
let comments = require('../json/comments')

const db = require('../db/models');
const Pet = db.Pet;

// id
router.get('/', (req, res) => {
  res.send(pets);
});

// NEW
router.get('/new', (req, res) => {
  res.render('pets-new');
});

// SHOW
router.get('/:id', (req, res) => {
    
    Pet.findById(req.params.id).then(pet => {
        res.render('pets-show', { pet, comments });
    })
});

// CREATE
router.post('/', (req, res) => {
//    Pet.unshift(req.body);
    
    Pet.create(req.body).then(pet => {
		res.send({ pet });
	});
    
    res.redirect('/');
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Pet.findById(req.params.id).then(pet => {
        res.render('pets-edit', { pet });
    })
  
});

// UPDATE
router.put('/:id', (req, res) => {
  res.redirect(`/pets/${req.params.id}`)
});

// DESTROY
router.delete('/:id', (req, res) => {
  res.redirect('/');
});


module.exports = router;
