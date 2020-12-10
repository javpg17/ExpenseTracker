const { response } = require('express');
const jwt = require('jsonwebtoken');

const jwtValidator = (req, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            Message: 'The token is null',
            Data: null
        });
    }

    try {
        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid = uid;
        req.name = name;

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            Message: error,
            Data: null
        });
        next();
    }
};

module.exports = {
    jwtValidator
}