const { Router } = require('express');
const express = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../../middlewares/fieldValidator');
const { CreateUser } = require('../users/userAppService');

const router = express.Router();

router.post(
    '/register',
    [
        check('name', 'the name is required').not().isEmpty(),
        check('email', 'the email is required').isEmail(),
        check('password', 'the lenght must be greater than 4').isLength({
            min: 4
        }),
        fieldValidator
    ],
    CreateUser
);

module.exports.router;