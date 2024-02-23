const router = require('express').Router();

const homeContoller = require('./controllers/homeController');
const authController = require('./controllers/authController');
const creatureController = require('./controllers/creatureController');
const userController = require('./controllers/userController');

router.use(homeContoller);
router.use(authController);
router.use('/creatures', creatureController);
router.use(userController);

router.all('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;