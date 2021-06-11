// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');


// Models
const { Comment } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/comments');
    try {
        const allComments = await Comment.find({});

        res.json({ comments: allComments });
    } catch (error) {
        console.log('Error inside of /api/comments');
        console.log(error);
        return res.status(400).json({ message: 'Review not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for book based on id
        const comment = await Comment.findById(id);
        res.json({ comment });
    } catch (error) {
        console.log('Error inside of /api/comments/:id');
        console.log(error);
        return res.status(400).json({ message: 'Review not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { title, body, date } = req.body;

    try {
        const newComment = await Comment.create({ title, body, date });
        console.log('new comment created', newComment);
        res.json({ comment: newComment });
    } catch (error) {
       console.log('Error inside of POST of /api/comments');
       console.log(error);
       return res.status(400).json({ message: 'Review was not created. Please try again...' }); 
    }
}

const update = async (req, res) => {
    console.log(req.body);

    try {
        
        const updatedComment = await Comment.update({ title: req.body.title }, req.body); // updating the blog
        const comment = await Comment.findOne({ title: req.body.title });

        console.log(updatedComment); // { n: 1, nModified: 0, ok: 1 }
        console.log(comment); // a book object 

        res.redirect(`/api/comments/${comment.id}`);

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Review could not be updated. Please try again...' });
    }
}

const deleteComment = async (req, res) => {
    const { id } = req.params;

    try {
        console.log(id);
        const result = await Comment.findByIdAndRemove(id);
        console.log(result);
        res.redirect('/api/comments');
    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Blog was not deleted. Please try again...' });
    }
}

// GET api/books/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Reveiw endpoint OK!'});
});

// GET -> /api/blog/
router.get('/', index); 
// GET -> /api/blog/:id
router.get('/:id', show);
// POST -> /api/blog
router.post('/', passport.authenticate('jwt', { session: false }), create);
// PUT -> /api/blog
router.put('/', passport.authenticate('jwt', { session: false }), update);
// DELETE => /api/blog/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteBook);

module.exports = router;