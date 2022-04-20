const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Schema to create Thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        require: true,
        minLength : 1,
        maxLength : 280
    },
    createAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    reactions : [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
});

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});

// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;