const Stone = require('../models/Stone');

exports.create = (stoneData) => Stone.create(stoneData);

exports.getAll = () => Stone.find();

exports.getOne = (stoneId) => Stone.findById(stoneId);

exports.getLatest = () => Stone.find().sort({ createdAt: -1}).limit(3);

exports.like = (stoneId, userId) => Stone.findByIdAndUpdate(stoneId, { $addToSet: { likedList: userId } });

exports.update = (stoneId, stoneData) => Stone.findByIdAndUpdate(stoneId, stoneData, { runValidators: true });

exports.delete = (stoneId) => Stone.findByIdAndDelete(stoneId);

exports.search = (name) => Stone.find({ name: new RegExp(name, 'i') });