const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', { title: '내 정보 - Soit' });
});

router.get('/join', isLoggedIn, (req, res)=>{
    res.render('join', { title: '회원가입 - Soit' });
});

router.get('/', (req, res, next)=>{
    const Soit = [];
    res.render('main', {
        title : 'Soit',
        Soit,
    });
});

module.exports = router;