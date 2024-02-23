const router = require('express').Router();
const creatureService = require('../services/creatureService');

router.get('/', async (req, res) => {

    const creatures = await creatureService.getAll().lean();

    res.render('creatures/all', { creatures });
});

router.get('/create', (req, res) => {

    if (!req.user) return res.redirect('/');

    res.render('creatures/create');
});

router.post('/create', async (req, res) => {

    const creatureData = {
        ...req.body,
        owner: req.user._id
    };

    try {
        const creature = await creatureService.create({ ...creatureData });

        res.redirect('/creatures');
    } catch (error) {
        res.render('creatures/create', { error, ...creatureData });
    }
});

router.get('/:creatureId', async (req, res) => {

    const creatureId = req.params.creatureId;

    const creature = await creatureService.getOne(creatureId).populate(['owner', 'votes']).lean();

    const isOwner = req.user && req.user._id == creature.owner._id;
    const isLoggedIn = req.user ? req.user._id : false;
    const hasVoted = req.user && creature.votes.map(user => user._id.toString()).includes(req.user._id.toString());

    const votedUsers = creature.votes.map(user => user.email).join(', ');
    const totalVotes = creature.votes.length;

    res.render('creatures/details', { ...creature, isOwner, isLoggedIn, hasVoted, votedUsers, totalVotes });
});

router.get('/:creatureId/vote', async (req, res) => {

    if (!req.user) return res.redirect(`/creatures/${creatureId}`);

    const creatureId = req.params.creatureId;

    const creature = await creatureService.getOne(creatureId);

    if (creature.owner == req.user._id) return res.redirect(`/creatures/${creatureId}`);

    try {
        await creatureService.vote(creatureId, req.user._id);
    } catch (error) {
        res.redirect(`/creatures/${creatureId}`);
    }

    res.redirect(`/creatures/${creatureId}`);
});

router.get('/:creatureId/edit', async (req, res) => {

    const creatureId = req.params.creatureId;
    
    if (!req.user) return res.redirect(`/creatures/${creatureId}`);

    const creature = await creatureService.getOne(creatureId).lean();

    const isOwner = req.user._id == creature.owner;
    if (!isOwner) return res.redirect(`/creatures/${creatureId}`);

    res.render('creatures/edit', { ...creature });
});

router.post('/:creatureId/edit', async (req, res) => {

    const creatureId = req.params.creatureId;
    const creatureData = req.body;

    try {
        const creature = await creatureService.update(creatureId, creatureData);

        res.redirect(`/creatures/${creatureId}`);
    } catch (error) {
        res.render('creatures/edit', { error, ...creatureData });
    }
});

router.get('/:creatureId/delete', async (req, res) => {

    const creatureId = req.params.creatureId;

    if (!req.user) return res.redirect(`/creatures/${creatureId}`);

    const creature = await creatureService.getOne(creatureId);

    const isOwner = req.user._id == creature.owner;
    if (!isOwner) return res.redirect(`/creatures/${creatureId}`);

    try {
        await creatureService.delete(creatureId);

        res.redirect('/creatures');
    } catch (error) {
        res.render(`/creatures/${creatureId}`);
    }
});

module.exports = router;