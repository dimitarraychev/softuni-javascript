const Creature = require('../models/Creature');
const User = require('../models/User');

exports.create = async (creatureData) => {
    try {
        const creature = await Creature.create(creatureData);

        await User.findByIdAndUpdate(creatureData.owner, { $addToSet: { createdCreatures: creature._id } });

        return creature;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

exports.getAll = () => Creature.find();

exports.getOne = (creatureId) => Creature.findById(creatureId);

exports.vote = (creatureId, userId) => Creature.findByIdAndUpdate(creatureId, { $addToSet: { votes: userId } });

exports.update = async (creatureId, creatureData) => {

    try {
        const course = await Creature.findByIdAndUpdate(creatureId, creatureData, { runValidators: true });

        return course;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);
