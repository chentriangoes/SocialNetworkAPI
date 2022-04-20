const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReactionById,
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
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(deleteReaction);;

// DELETE to remove one reaction from a thought
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReactionById);

module.exports = router;