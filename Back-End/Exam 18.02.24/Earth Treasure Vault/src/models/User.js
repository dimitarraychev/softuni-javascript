const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        required: [true, 'is required'],
        type: String,
        lowercase: true,
        unique: true,
        minLength: [10, 'should be at least 10 characters long']
    },
    password: {
        required: [true, 'is required'],
        type: String,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;