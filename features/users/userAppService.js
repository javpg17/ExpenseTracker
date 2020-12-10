const { response } = require('express');
const User = require('./user');
const bcrypt = require('bcryptjs');
const { tokenGenerator } = require('../../helpers/tokenGenerator')

const CreateUser = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        const isFoundUser = await User.findOne({
            email: email
        });
        if (isFoundUser) {
            return res.status(400).json({
                Message: "Email already exists",
                Data: null
            });
        }

        const newUser = new User(req.body);

        // Encrypting password
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);

        await newUser.save();
        const generatedToken = await tokenGenerator(newUser.uid, newUser.name)

        newUser.password = "****";
        return res.status(201).json({
            Message: null,
            Data: newUser,
            Token: generatedToken
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            Message: "This user cant be saved",
            Data: null
        })
    }
};

module.exports = {
    CreateUser
}
