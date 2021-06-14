// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');


// Models
const { Attraction } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/attractions');
    try {
        const allAttractions = await Attraction.find({});

        res.json({ attractions: allAttractions });
    } catch (error) {
        console.log('Error inside of /api/attractions');
        console.log(error);
        return res.status(400).json({ message: 'Attraction not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for attraction based on id
        const attraction = await Attraction.findById(id);
        res.json({ attraction });
    } catch (error) {
        console.log('Error inside of /api/attraction/:id');
        console.log(error);
        return res.status(400).json({ message: 'Attraction not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { name, location } = req.body;

    try {
        const newAttraction = await Attraction.create({ name, location });
        console.log('new attraction created', newAttraction);
        res.json({ attraction: newAttraction });
    } catch (error) {
       console.log('Error inside of POST of /api/attractions');
       console.log(error);
       return res.status(400).json({ message: 'Attraction was not created. Please try again...' }); 
    }
}

const update = async (req, res) => {
    console.log(req.body);

    try {
        const updatedAttraction = await Attraction.update({ name: req.body.name }, req.body); // updating the book
        const attraction = await Attraction.findOne({ name: req.body.name });

        console.log(updatedAttraction); // { n: 1, nModified: 0, ok: 1 }
        console.log(attraction); // a book object 

        res.redirect(`/api/attractions/${attraction.id}`);

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Attraction could not be updated. Please try again...' });
    }
}

const deleteAttraction = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);
        const result = await Attraction.findByIdAndRemove(id);
        console.log(result);
        res.redirect('/api/attractions');
    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Attraction was not deleted. Please try again...' });
    }
}

// GET api/books/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Attractions endpoint OK!'});
});

// GET -> /api/books/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/books/:id
router.get('/:id', passport.authenticate('jwt', { session: false }), show);
// POST -> /api/books
router.post('/', passport.authenticate('jwt', { session: false }), create);
// PUT -> /api/books
router.put('/', passport.authenticate('jwt', { session: false }), update);
// DELETE => /api/books/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteAttraction);

module.exports = router;