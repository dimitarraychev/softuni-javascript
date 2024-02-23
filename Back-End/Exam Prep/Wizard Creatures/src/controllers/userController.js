const router = require('express').Router();
const userService = require('../services/userService')

router.get('/profile', async (req, res) => {

    if (!req.user) return res.redirect('/');

    const userId = req.user._id;
    
    const user = await userService.getOne(userId).populate('createdCreatures').lean();

    res.render('profile', { ...user, });
});

module.exports = router;