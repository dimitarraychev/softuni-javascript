const router = require('express').Router();
const courseService = require('../services/courseService');

router.get('/courses', async (req, res) => {

    const courses = await courseService.getAll().lean();

    res.render('courses/catalog', { courses });
});

router.get('/courses/create', (req, res) => {

    if (!req.user) return res.redirect('/');

    res.render('courses/create');
});

router.post('/courses/create', async (req, res) => {
    const courseData = {
        ...req.body,
        owner: req.user._id
    };

    try {
        const course = await courseService.create({ ...courseData });

        res.redirect('/courses');
    } catch (error) {
        res.render('courses/create', { error, ...courseData });
    }
});

router.get('/courses/:courseId', async (req, res) => {

    const courseId = req.params.courseId;

    const course = await courseService.getOne(courseId).populate(['owner', 'signUpList']).lean();

    const isOwner = req.user && req.user._id == course.owner._id;
    const isLoggedIn = req.user ? req.user._id : false;
    const isSignedUp = req.user && course.signUpList.map(user => user._id.toString()).includes(req.user._id.toString());

    const signedUpUsers = course.signUpList.map(user => user.username).join(', ');

    res.render('courses/details', { ...course, isOwner, isLoggedIn, isSignedUp, signedUpUsers });
});

router.get('/courses/:courseId/signup', async (req, res) => {

    if (!req.user) return res.redirect('/');

    const courseId = req.params.courseId;

    const course = await courseService.getOne(courseId);

    if (course.owner == req.user._id) return res.redirect(`/courses/${courseId}`);

    await courseService.signUp(courseId, req.user._id);

    res.redirect(`/courses/${courseId}`);
});

router.get('/courses/:courseId/edit', async (req, res) => {


    const courseId = req.params.courseId;
    
    if (!req.user) return res.redirect(`/courses/${courseId}`);

    const course = await courseService.getOne(courseId).lean();

    const isOwner = req.user._id == course.owner;
    if (!isOwner) return res.redirect('/');

    res.render('courses/edit', { ...course });
});

router.post('/courses/:courseId/edit', async (req, res) => {

    const courseId = req.params.courseId;
    const courseData = req.body;

    try {
        const course = await courseService.update(courseId, courseData);

        res.redirect(`/courses/${courseId}`);
    } catch (error) {
        res.render('courses/edit', { error, ...courseData });
    }
});

router.get('/courses/:courseId/delete', async (req, res) => {

    const courseId = req.params.courseId;

    if (!req.user) return res.redirect(`/courses/${courseId}`);

    const course = await courseService.getOne(courseId).lean();

    const isOwner = req.user._id == course.owner;
    if (!isOwner) return res.redirect('/');

    await courseService.delete(courseId);

    res.redirect('/courses');
});

module.exports = router;