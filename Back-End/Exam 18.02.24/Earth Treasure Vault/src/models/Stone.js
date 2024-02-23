const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema({
    name: {
        required: [true, 'is required'],
        type: String,
        minLength: [2, 'should be at least 2 characters long']
    },
    category: {
        required: [true, 'is required'],
        type: String,
        minLength: [3, 'should be at least 3 characters long']
    },
    color: {
        required: [true, 'is required'],
        type: String,
        minLength: [2, 'should be at least 2 characters long']
    },
    image: {
        required: [true, 'is required'],
        type: String,
        match: [/^https?:\/\//, 'should start with http:// or https://'],
    },
    location: {
        required: [true, 'is required'],
        type: String,
        minLength: [5, 'should be at least 5 characters long'],
        maxLength: [15, 'cannot be longer than 15 characters']
    },
    formula: {
        required: [true, 'is required'],
        type: String,
        minLength: [3, 'should be at least 3 characters long'],
        maxLength: [30, 'cannot be longer than 30 characters']
    },
    description: {
        required: [true, 'is required'],
        type: String,
        minLength: [10, 'should be at least 10 characters long'],
    },
    likedList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Stone = mongoose.model('Stone', stoneSchema);

module.exports = Stone;