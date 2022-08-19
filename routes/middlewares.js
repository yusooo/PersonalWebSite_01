exports.isLoggedin = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else{
        res.status(403).send('로그인 필요');
    }
};

exports.isNotLoggedIn = (req, res, next) =>{
    if(!req.isQuthenticated()){
        next();
    }else {
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.status(`/?error=${message}`);
    }
};