const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {

    if (req.user) return res.redirect('/');

    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    if (password.trim() == '' || password !== rePassword) {
        const error = 'Error: Passwords must match and not be empty.'
        return res.render('auth/register', { error, username, email });
    }
    
    // if (password.trim().length < 4) {
    //     const error = 'Error: Password must be at least 4 characters'
    //     return res.render('auth/register', { error, username, email });
    // }

    try {
        const token = await authService.register(username, email, password);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        res.render('auth/register', { error, username, email });
    }
});

router.get('/login', (req, res) => {

    if (req.user) return res.redirect('/');

    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        res.render('auth/login', { error, email });
    }
});

router.get('/logout', (req, res) => {

    if (!req.user) return res.redirect('/');

    res.clearCookie('auth');

    res.redirect('/');
});

module.exports = router;