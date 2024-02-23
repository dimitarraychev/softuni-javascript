const router = require('express').Router();

const stoneService = require('../services/stoneService');
const { isAuth } = require('../middlewares/auth');

router.get('/', async (req, res) => {

    const stones = await stoneService.getAll().lean();

    res.render('stones/dashboard', { stones });
});

router.get('/add', isAuth, (req, res) => {
    res.render('stones/create');
});

router.post('/add', isAuth, async (req, res) => {

    const stoneData = {
        ...req.body,
        owner: req.user._id
    };

    try {
        await stoneService.create({ ...stoneData });

        res.redirect('/stones');
    } catch (err) {
        const error = err.message || err;
        res.render('stones/create', { error, ...stoneData });
    }
});

router.get('/:stoneId', async (req, res) => {

    const stoneId = req.params.stoneId;

    try {
        const stone = await stoneService.getOne(stoneId).lean();

        const isOwner = req.user && req.user._id == stone.owner;
        const isLoggedIn = req.user ? req.user._id : false;
        const hasLiked = req.user && stone.likedList.some(userId => userId == req.user._id);

        res.render('stones/details', { ...stone, isOwner, isLoggedIn, hasLiked });
    } catch (err) {
        res.redirect('/404');
    }
});

router.get('/:stoneId/like', isAuth, async (req, res) => {

    const stoneId = req.params.stoneId;
    const userId = req.user._id;

    try {
        const stone = await stoneService.getOne(stoneId);

        if (stone.owner == userId) return res.redirect(`/stones/${stoneId}`);
    } catch (err) {
        return res.redirect('/404');
    }

    try {
        await stoneService.like(stoneId, userId);

        res.redirect(`/stones/${stoneId}`);
    } catch (err) {
        res.redirect(`/stones/${stoneId}`);
    }
});

router.get('/:stoneId/edit', isAuth, async (req, res) => {

    const stoneId = req.params.stoneId;

    try {
        const stone = await stoneService.getOne(stoneId).lean();

        const isOwner = req.user._id == stone.owner;
        if (!isOwner) return res.redirect(`/stones/${stoneId}`);

        res.render('stones/edit', { ...stone });
    } catch (err) {
        res.redirect('/404');
    }
});

router.post('/:stoneId/edit', isAuth, async (req, res) => {

    const stoneId = req.params.stoneId;
    const stoneData = req.body;

    try {
        await stoneService.update(stoneId, stoneData);

        res.redirect(`/stones/${stoneId}`);
    } catch (err) {
        const error = err.message || err;
        res.render('stones/edit', { error, ...stoneData });
    }
});

router.get('/:stoneId/delete', isAuth, async (req, res) => {

    const stoneId = req.params.stoneId;

    try {
        const stone = await stoneService.getOne(stoneId);

        const isOwner = req.user._id == stone.owner;
        if (!isOwner) return res.redirect(`/stones/${stoneId}`);
    } catch (err) {
        return res.redirect('/404');
    }

    try {
        await stoneService.delete(stoneId);

        res.redirect('/stones');
    } catch (error) {
        res.render(`/stones/${stoneId}`);
    }
});

module.exports = router;