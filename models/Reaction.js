const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// Create a virtual property `friendCount` that gets the amount of friends per user
userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});