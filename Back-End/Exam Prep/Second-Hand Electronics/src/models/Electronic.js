const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        required: [true, 'Name is required'],
        type: String,
        minLength: [10, 'Name should be at least 10 characters long']
    },
    type: {
        required: [true, 'Type is required'],
        type: String,
        minLength: [2, 'Type should be at least 2 characters long']
    },
    damages: {
        required: [true, 'Damages are required'],
        type: String,
        minLength: [10, 'Damages should be at least 10 characters long']
    },
    image: {
        required: [true, 'Image is required'],
        type: String,
        match: [/^https?:\/\//, 'Image should start with http:// or https://'],
    },
    description: {
        required: [true, 'Description is required'],
        type: String,
        minLength: [10, 'Description should be at least 10 characters long'],
        maxLength: [200, 'Descripton cannot be longer than 200 characters']
    },
    production: {
        required: [true, 'Production is required'],
        type: Number,
        min: 1900,
        max: 2023
    },
    exploitation: {
        required: [true, 'Exploitation is required'],
        type: Number,
        min: 0
    },
    price: {
        required: [true, 'Price is required'],
        type: Number,
        min: 0
    },
    buyingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Electronic = mongoose.model('Electronic', electronicSchema);

module.exports = Electronic;