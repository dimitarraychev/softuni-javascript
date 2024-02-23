const router = require('express').Router();

const homeContoller = require('./controllers/homeController');
const authController = require('./controllers/authController');
const stoneController = require('./controllers/stoneController');

router.use(homeContoller);
router.use(authController);
router.use('/stones', stoneController);

router.all('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;