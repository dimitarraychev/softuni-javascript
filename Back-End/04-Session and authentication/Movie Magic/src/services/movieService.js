const Movie = require('../models/Movie');

exports.create = (movieData) => Movie.create(movieData);

exports.getAll = () => Movie.find();

exports.getOne = (movieID) => Movie.findById(movieID).populate('casts');

exports.attach = (movieID, castID) => Movie.findByIdAndUpdate(movieID, { $push: { casts: castID } });

exports.delete = (movieID) => Movie.findByIdAndDelete(movieID);

exports.edit = (movieID, data) => Movie.findByIdAndUpdate(movieID, data);

exports.search = (title, genre, year) => {

    let query = {};

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
        query.genre = new RegExp(genre, 'i');
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
};