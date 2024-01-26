const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const newMovie = req.body;

    try {
        await movieService.create(newMovie);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/create');
    }
});

router.get('/movie/:movieID', async (req, res) => {
    const movieID = req.params.movieID;
    const movie = await movieService.getOne(movieID).lean();

    movie.rating = '&#x2605;'.repeat(movie.rating);

    res.render('details', { movie });
});

router.get('/movie/:movieID/attach', async (req, res) => {
    const movieID = req.params.movieID;
    const movie = await movieService.getOne(movieID).lean();
    const cast = await castService.getAll().lean();

    res.render('cast-attach', { movie, cast });
});

router.post('/movie/:movieID/attach', async (req, res) => {
    const movieID = req.params.movieID;
    const castID = req.body.cast;

    await movieService.attach(movieID, castID);

    res.redirect(`/movie/${movieID}/attach`);
});

module.exports = router;