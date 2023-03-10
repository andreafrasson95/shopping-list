const asyncWrapper = require('../middleware/async')
const User = require('../models/user')
const { BadRequestError } = require('../errors');

const registerUser = (req, res) => {

//TODO
}

const login = asyncWrapper(async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        throw new BadRequestError('Username or Password missing');

    const user = await User.findOne({ username })
    if (!user)
        throw new BadRequestError('User Not Found');

    const isPasswordCorrect = await user.comparePassword(password)
    if (isPasswordCorrect)
        throw new BadRequestError('Wrong Login Credentials');

    const token = user.createJWT()

    res.status(200).cookie('token',token).json({ user: { name: user.username }});


});

module.exports = { registerUser, login };