const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')
const asyncWrapper = require('./async')

const auth = asyncWrapper(async (req, res, next) => {

    const authCookie = req.cookies.token;
    if (!authCookie) {
        throw new UnauthenticatedError('Authentication invalid');
    }

    const payload = jwt.verify(authCookie, process.env.TOKEN_SECRET);
 
    req.user = { userId: payload.userId, name: payload.name };
    next();

});

module.exports = auth;