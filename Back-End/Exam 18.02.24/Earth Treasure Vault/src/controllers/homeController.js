const router = require('express').Router();

const stoneService = require('../services/stoneService');

router.get('/', async (req, res) => {
    
    const latestStones = await stoneService.getLatest().lean();

    res.render('home', { latestStones });
});

router.get('/search', async (req, res) => {

    const stones = await stoneService.getAll().lean();

    res.render('search', { stones });
});

router.post('/search', async (req, res) => {

    const { name } = req.body;

    const stones = await stoneService.search(name).lean();
    
    res.render('search', { stones, name });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;