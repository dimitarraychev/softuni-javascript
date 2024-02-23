const router = require('express').Router();

const homeContoller = require('./controllers/homeController');
const authController = require('./controllers/authController');
const courseController = require('./controllers/courseController');
const userController = require('./controllers/userController');

router.use(homeContoller);
router.use(authController);
router.use(courseController);
router.use(userController);

router.all('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;