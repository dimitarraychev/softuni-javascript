const router = require('express').Router();
const { isAuth } = require('../middlewares/auth');
const electronicService = require('../services/electronicService');

router.get('/', async (req, res) => {
    const electronics = await electronicService.getAll().lean();

    res.render('electronics/catalog', { electronics });
});

router.get('/create', isAuth, (req, res) => {
    res.render('electronics/create');
});

router.post('/create', isAuth, async (req, res) => {

    const electronicData = {
        ...req.body,
        owner: req.user._id
    };

    try {
        const electronic = await electronicService.create({ ...electronicData });

        res.redirect('/electronics');
    } catch (error) {
        res.render('electronics/create', { error, ...electronicData });
    }
});

router.get('/search', async (req, res) => {
    const { name, type } = req.query;

    const electronics = await electronicService.search(name, type).lean();

    res.render('electronics/search', { electronics, name, type });
});

router.get('/:electronicId', async (req, res) => {

    const electronicId = req.params.electronicId;

    const electronic = await electronicService.getOne(electronicId).lean();

    const isOwner = req.user && req.user._id == electronic.owner;
    const isLoggedIn = req.user ? req.user._id : false;
    const hasBought = req.user && electronic.buyingList.some(userId => userId == req.user._id);

    res.render('electronics/details', { ...electronic, isOwner, isLoggedIn, hasBought });
});

router.get('/:electronicId/buy', isAuth, async (req, res) => {

    const electronicId = req.params.electronicId;

    const electronic = await electronicService.getOne(electronicId);

    if (electronic.owner == req.user._id) return res.redirect(`/electronics/${electronicId}`);

    try {
        await electronicService.buy(electronicId, req.user._id);
    } catch (error) {
        res.redirect(`/electronics/${electronicId}`);
    }

    res.redirect(`/electronics/${electronicId}`);
});

router.get('/:electronicId/edit', isAuth, async (req, res) => {

    const electronicId = req.params.electronicId;

    const electronic = await electronicService.getOne(electronicId).lean();

    const isOwner = req.user._id == electronic.owner;
    if (!isOwner) return res.redirect(`/electronicS/${electronicId}`);

    res.render('electronics/edit', { ...electronic });
});

router.post('/:electronicId/edit', isAuth, async (req, res) => {

    const electronicId = req.params.electronicId;
    const electronicData = req.body;

    try {
        const electronic = await electronicService.update(electronicId, electronicData);

        res.redirect(`/electronics/${electronicId}`);
    } catch (error) {
        res.render('electronics/edit', { error, ...creatureData });
    }
});

router.get('/:electronicId/delete', isAuth, async (req, res) => {

    const electronicId = req.params.electronicId;

    const electronic = await electronicService.getOne(electronicId);

    const isOwner = req.user._id == electronic.owner;
    if (!isOwner) return res.redirect(`/electronics/${electronicId}`);

    try {
        await electronicService.delete(electronicId);

        res.redirect('/electronics');
    } catch (error) {
        res.render(`/electronics/${electronicId}`);
    }
});

module.exports = router;