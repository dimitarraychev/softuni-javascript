const Electronic = require('../models/Electronic');

exports.create = async (electronicData) => {

    try {
        const electronic = await Electronic.create(electronicData);

        return electronic;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

exports.getAll = () => Electronic.find();

exports.getOne = (electronicId) => Electronic.findById(electronicId);

exports.buy = (electronicId, userId) => Electronic.findByIdAndUpdate(electronicId, { $addToSet: { buyingList: userId } });

exports.update = async (electronicId, electronicData) => {

    try {
        const electronic = await Electronic.findByIdAndUpdate(electronicId, electronicData, { runValidators: true });

        return electronic;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

exports.delete = (electronicId) => Electronic.findByIdAndDelete(electronicId);

exports.search = (name, type) => {

    let query = {};

    if (name) {
        query.name = new RegExp(name, 'i');
    }

    if (type) {
        query.type = new RegExp(type, 'i');
    }

    return Electronic.find(query);
};