const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');
const { isAuth } = require('../middlewares/auth');

router.get('/create', isAuth, (req, res) => {
    res.render('movie/create');
});

router.post('/create', isAuth, async (req, res) => {
    const newMovie = { 
        ...req.body,
        owner: req.user._id
    };

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
    const isOwner = movie.owner && movie.owner == req.user?._id;

    movie.rating = '&#x2605;'.repeat(movie.rating);

    res.render('movie/details', { movie, isOwner });
});

router.get('/movie/:movieID/attach', isAuth, async (req, res) => {
    const movieID = req.params.movieID;
    const movie = await movieService.getOne(movieID).lean();
    const cast = await castService.getAll().lean();

    res.render('cast/attach', { movie, cast });
});

router.post('/movie/:movieID/attach', isAuth, async (req, res) => {
    const movieID = req.params.movieID;
    const castID = req.body.cast;

    await movieService.attach(movieID, castID);

    res.redirect(`/movie/${movieID}/attach`);
});

router.get('/movie/:movieID/edit', isAuth, async (req, res) => {

    const movieID = req.params.movieID;
    const movie = await movieService.getOne(movieID).lean();

    res.render('movie/edit', { movie });
});

router.post('/movie/:movieID/edit', isAuth, async (req, res) => {

    const movieID = req.params.movieID;
    const movieData = req.body;

    try {
        await movieService.edit(movieID, movieData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/movie/${movieID}`);
    }
});

router.get('/movie/:movieID/delete', isAuth, async (req, res) => {

    const movieID = req.params.movieID;
    await movieService.delete(movieID);

    res.redirect('/');
});

module.exports = router;