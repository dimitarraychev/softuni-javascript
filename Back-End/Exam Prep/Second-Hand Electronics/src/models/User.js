const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        required: [true, 'Username is required'],
        type: String,
        minLength: [3, 'Username should be at least 3 characters long']
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
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;