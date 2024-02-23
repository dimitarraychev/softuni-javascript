const router = require('express').Router();
const courseService = require('../services/courseService');

router.get('/', async (req, res) => {
    const lastThreePosts = await courseService.getLastThree().lean();
    res.render('home', { lastThreePosts });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;