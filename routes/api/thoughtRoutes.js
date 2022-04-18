const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router
.route('/')
.get(getThoughts)
.post(createThought);

// /api/thoughts/:id
router
.route('/:id')
.get(getThoughtById)
.post(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(deleteReaction);

module.exports = router;