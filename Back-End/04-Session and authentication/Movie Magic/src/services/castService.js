const Cast = require('../models/Cast');

exports.create = (castData) => Cast.create(castData);

exports.getAll = () => Cast.find();

exports.getOne = (castID) => Cast.findById(castID);
