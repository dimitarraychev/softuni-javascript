const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        required: [true, 'Title is required'],
        type: String,
        minLength: [5, 'Minimum length for title is 5'],
    },
    type: {
        required: [true, 'Type is required'],
        type: String,
        minLength: [3, 'Minimum length for type is 3'],
    },
    certificate: {
        required: [true, 'Certificate is required'],
        type: String,
        minLength: [2, 'Minimum length for certificate is 2'],
    },
    image: {
        required: [true, 'Image is required'],
        type: String,
        match: [/^https?:\/\//, 'Image should start with http:// or https://'],
    },
    description: {
        required: [true, 'Description is required'],
        type: String,
        minLength: [10, 'Minimum length for description is 10'],
    },
    price: {
        required: [true, 'Price is required'],
        type: Number,
        min: [1, 'Price should be a positive number'],
    },
    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;