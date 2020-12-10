const { response } = require('express');
const { validationResult } = require('express-validator');


const fieldValidator = (req, res = response, next) => {
    const fieldsValidations = validationResult(req);
    if (!fieldsValidations.isEmpty()) {
        const fieldsErrorMessage = fieldsValidations.errors[0].msg;
        return res.status(400).json({
            Message: fieldsErrorMessage,
            Data: null
        });
    }
    next();
}

module.exports = {
    fieldValidator
}
