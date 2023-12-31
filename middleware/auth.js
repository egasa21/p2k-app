const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = (req, res, next) => {
    const token = req.cookies.token;

    // check jwt token 
    if (token) {
        jwt.verify(token, 'akunamatata timon dan pumba', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/admin/login');
            } else {
                console.log(decodedToken);;
                next();
            }
        })
    }
    else {
        res.redirect('/admin/login')
    }
}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'akunamatata timon dan pumba', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null
                next()
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }
    else {
        res.locals.user = null;
        next()
    }
}


module.exports = { requireAuth, checkUser };