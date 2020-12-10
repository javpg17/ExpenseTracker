const { response } = require('express');
const User = require('./user');

const CreateUser = async (req, res = response) => {
    const { email, pasword } = req.body;
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
        await newUser.save();

        return res.status(201).json({
            Message: null,
            Data: newUser
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            Message: "This user cant be saved",
            Data: null
        })
    }
};

module.exports = (
    CreateUser
)