const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        required: [true, 'Username is required'],
        type: String,
        minLength: [2, 'Username should be at least 2 characters long']
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
        minLength: [4, 'Password should be at least 4 characters long']
    },
    signedUpCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course',
    }],
    createdCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course',
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;