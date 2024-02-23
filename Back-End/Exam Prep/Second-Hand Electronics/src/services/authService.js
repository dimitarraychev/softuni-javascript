const User = require('../models/User');
const { SECRET } = require('../config/config');

const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

exports.register = async function (email, username, password) {

    try {
        password = await bcrypt.hash(password, 12);

        const user = await User.create({ email, username, password });

        const token = await signToken(user._id, user.username, user.email);

        return token;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

exports.login = async function(email, password) {

    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid email or password!');
    
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error('Invalid email or password!');
  
        const token = await signToken(user._id, user.username, user.email);

        return token;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

function signToken(_id, username, email) {
    const payload = {
        _id,
        username,
        email
    };

    const token = jwt.sign(payload, SECRET);

    return token;
}