const router = require('express').Router();
const userService = require('../services/userService')

router.get('/profile', async (req, res) => {

    if (!req.user) return res.redirect('/');

    const userId = req.user._id;
    
    const user = await userService.getOne(userId).populate(['createdCourses', 'signedUpCourses']).lean();

    const createdCoursesCount = user.createdCourses.length;
    const signedUpCoursesCount = user.signedUpCourses.length;

    res.render('profile', { ...user, createdCoursesCount, signedUpCoursesCount});
});

module.exports = router;