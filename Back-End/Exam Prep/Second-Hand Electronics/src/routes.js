const router = require('express').Router();

const homeContoller = require('./controllers/homeController');
const authController = require('./controllers/authController');
const electronicController = require('./controllers/electronicController');

router.use(homeContoller);
router.use(authController);
router.use('/electronics', electronicController);

router.all('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;