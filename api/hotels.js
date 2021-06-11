// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');


// Models
const { Hotel } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/hotels');
    try {
        const allHotel = await Hotel.find({});

        res.json({ hotels: allHotel });
    } catch (error) {
        console.log('Error inside of /api/hotels');
        console.log(error);
        return res.status(400).json({ message: 'Hotel not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for book based on id
        const hotel = await Hotel.findById(id);
        res.json({ hotel });
    } catch (error) {
        console.log('Error inside of /api/hotels/:id');
        console.log(error);
        return res.status(400).json({ message: 'Hotel not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { name, location, price, reveiws } = req.body;

    try {
        const newHotel = await Hotel.create({ name, location, price, reveiws });
        console.log('new hotel created', newHotel);
        res.json({ hotel: newHotel });
    } catch (error) {
       console.log('Error inside of POST of /api/hotels');
       console.log(error);
       return res.status(400).json({ message: 'Hotel was not created. Please try again...' }); 
    }
}

const update = async (req, res) => {
    console.log(req.body);

    try {
        const updatedHotel = await Hotel.update({ name: req.body.name }, req.body); // updating the book
        const hotel = await Hotel.findOne({ name: req.body.name });

        console.log(updatedHotel); // { n: 1, nModified: 0, ok: 1 }
        console.log(hotel); // a book object 

        res.redirect(`/api/hotels/${hotel.id}`);

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Hotel could not be updated. Please try again...' });
    }
}

const deleteHotel = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);
        const result = await Hotel.findByIdAndRemove(id);
        console.log(result);
        res.redirect('/api/hotels');
    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Hotel was not deleted. Please try again...' });
    }
}

// GET api/books/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Hotels endpoint OK!'});
});

// GET -> /api/hotels/
router.get('/', index); 
// GET -> /api/hotels/:id
router.get('/:id', show);
// POST -> /api/hotels
router.post('/', passport.authenticate('jwt', { session: false }), create);
// PUT -> /api/hotels
router.put('/', passport.authenticate('jwt', { session: false }), update);
// DELETE => /api/hotels/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteHotel);

module.exports = router;