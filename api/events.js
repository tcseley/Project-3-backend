// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');


// Models
const { Event } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/events');
    try {
        const allEvents = await Event.find({});

        res.json({ events: allEvents });
    } catch (error) {
        console.log('Error inside of /api/events');
        console.log(error);
        return res.status(400).json({ message: 'Event not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for book based on id
        const event = await Event.findById(id);
        res.json({ event });
    } catch (error) {
        console.log('Error inside of /api/events/:id');
        console.log(error);
        return res.status(400).json({ message: 'Event not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { name, location } = req.body;

    try {
        const newEvent = await Event.create({ name, location });
        console.log('new event created', newEvent);
        res.json({ event: newEvent });
    } catch (error) {
       console.log('Error inside of POST of /api/events');
       console.log(error);
       return res.status(400).json({ message: 'Event was not created. Please try again...' }); 
    }
}

const update = async (req, res) => {
    console.log(req.body);

    try {
        const updatedEvent = await Event.update({ name: req.body.name }, req.body); // updating the book
        const event = await Event.findOne({ name: req.body.name });

        console.log(updatedEvent); // { n: 1, nModified: 0, ok: 1 }
        console.log(event); // a book object 

        res.redirect(`/api/events/${event.id}`);

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Event could not be updated. Please try again...' });
    }
}

const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);
        const result = await Event.findByIdAndRemove(id);
        console.log(result);
        res.redirect('/api/events');
    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Event was not deleted. Please try again...' });
    }
}

// GET api/books/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Events endpoint OK!'});
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
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteEvent);

module.exports = router;