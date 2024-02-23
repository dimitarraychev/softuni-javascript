const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        required: [true, 'First name is required'],
        type: String,
        minLength: [3, 'First name should be at least 3 characters long']
    },
    lastName: {
        required: [true, 'Last name is required'],
        type: String,
        minLength: [3, 'Last name should be at least 3 characters long']
    },
    email: {
        required: [true, 'Email is required'],
        type: String,
        lowercase: true,
        unique: true,
        minLength: [10, 'Email should be at least 10 characters long']
    },
    password: {
        required: [true, 'Password is required'],
        type: String,
    },
    createdCreatures: [{
        type: mongoose.Types.ObjectId,
        ref: 'Creature'
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;