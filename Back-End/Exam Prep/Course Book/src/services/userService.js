const User = require('../models/User');

exports.getOne = function (userId) {
    return User.findById(userId);
};