const router = require('express').Router();
const movieService = require('../services/movieService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const newMovie = req.body;

    movieService.create(newMovie);

    res.redirect('/');
});

router.get('/movie/:movieID', (req, res) => {
    const movieID = req.params.movieID;
    const movie = movieService.getOne(movieID);
    
    movie.rating = '&#x2605;'.repeat(movie.rating);

    res.render('details', { movie });
});

module.exports = router;