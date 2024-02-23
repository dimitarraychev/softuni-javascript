const Course = require('../models/Course');
const User = require('../models/User');

exports.create = async function (courseData) {

    try {
        const course = await Course.create(courseData);

        await User.findByIdAndUpdate(courseData.owner, { $addToSet: { createdCourses: course._id } });

        return course;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

exports.update = async function (courseId, courseData) {

    try {
        const course = await Course.findByIdAndUpdate(courseId, courseData, { runValidators: true });

        return course;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

exports.getAll = function () {
    return Course.find();
};

exports.getLastThree = function () {
    return Course.find().sort({ createdAt: -1}).limit(3);
};

exports.getOne = function (courseId) {
    return Course.findById(courseId);
};

exports.signUp = async function (courseId, userId) {
    await Course.findByIdAndUpdate(courseId, { $addToSet: { signUpList: userId } });
    await User.findByIdAndUpdate(userId, { $addToSet: { signedUpCourses: courseId } });
    return;
};

exports.delete = function (courseId) {
    return Course.findByIdAndDelete(courseId);
};