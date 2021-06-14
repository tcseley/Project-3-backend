// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

//models
const { Restaurant } = require('../models');


//controllers
const index = async (req, res) => {
    console.log('inside of /api/restaurant/');
    try {
        const allRestaurants = await Restaurant.find({});

        res.json({ restaurants: allRestaurants });
    } catch (error) {
        console.log('Error inside of /api/restaurant');
        console.log(error);
        return res.status(400).json({ message: 'Restaurants not found... Please try again.' });
    }
}

//

const show = async (req, res) => {
    const { name } = req.params;
    try {
        // look for book based on id
        const restaurant = await Restaurant.findOne(name);
        res.json({ restaurant });
    } catch (error) {
        console.log('Error inside of /api/restaurant/:name');
        console.log(error);
        return res.status(400).json({ message: 'Restaurant not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { name, location, review, price, phone, image_url } = req.body;

    try {
        const newRestaurant = await Restaurant.create({ name, location, review, price, phone, image_url });
        console.log('new book created', newRestaurant);
        res.json({ restaurant: newRestaurant });
    } catch (error) {
       console.log('Error inside of POST of /api/restaurants ');
       console.log(error);
       return res.status(400).json({ message: 'Restaurant was not created. Please try again...' }); 
    }
}

const update = async (req, res) => {
    console.log(req.body);
    try {
//store the new review in variable "new review = req.body.review"
//delete the old review from req.body "delete req.body.review" 
//after restaurant is updated, push the new comment into the reviews array
//Save updated restaurant 
        const updatedRestaurant = await Restaurant.findOneAndUpdate({ name: req.body.name }, req.body, {new: true}); // updating the book
        // const restaurant = await Restaurant.findOne({ name: req.body.name });

        console.log(updatedRestaurant); // { n: 1, nModified: 0, ok: 1 }
        // console.log(restaurant); // a book object 

        res.redirect(`/api/restaurant/${updatedRestaurant.name}`);

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Restaurant could not be updated. Please try again...' });
    }
}

const deleteRestaurant = async (req, res) => {
    const { name } = req.params;
    try {
        console.log(name);
        const result = await Restaurant.findOneAndRemove(name);
        console.log(result);
        res.redirect('/api/restaurant');
    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Restaurant was not deleted. Please try again...' });
    }
}

//  (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Restaurant endpoint OK!'});
});

// GET -> /api/restaurant/
router.get('/', index); 
// router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/restaurant/:id
router.get('/:id', show);
// router.get('/:name', passport.authenticate('jwt', { session: false }), show);
// POST -> /api/restaurant
router.post('/', create);

// router.post('/', passport.authenticate('jwt', { session: false }), create);
// PUT -> /api/restaurant

router.put('/', update);

// router.put('/', passport.authenticate('jwt', { session: false }), update);
// DELETE => /api/restaurant/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteRestaurant);


// GET -> /api/restaurants/
router.get('/', index); 

module.exports = router;

