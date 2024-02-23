const mongoose = require('mongoose');

const creatureSchema = new mongoose.Schema({
    name: {
        required: [true, 'Name is required'],
        type: String,
        minLength: [2, 'Name should be at least 2 characters long']
    },
    species: {
        required: [true, 'Species is required'],
        type: String,
        minLength: [3, 'Species should be at least 3 characters long']
    },
    skinColor: {
        required: [true, 'Skin color is required'],
        type: String,
        minLength: [3, 'Skin color should be at least 3 characters long']
    },
    eyeColor: {
        required: [true, 'Eye color is required'],
        type: String,
        minLength: [3, 'Eye color should be at least 3 characters long']
    },
    image: {
        required: [true, 'Image is required'],
        type: String,
        match: [/^https?:\/\//, 'Image should start with http:// or https://'],
    },
    description: {
        required: [true, 'Description is required'],
        type: String,
        minLength: [5, 'Description should be at least 3 characters long'],
        maxLength: [500, 'Descripton cannot be longer than 500 characters']
    },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Creature = mongoose.model('Creature', creatureSchema);

module.exports = Creature;