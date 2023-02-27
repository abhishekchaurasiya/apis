const User = require("../models/userModel");
const Joi = require("joi")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const userValidation = Joi.object({
        name: Joi.string().min(3).max(40).required(),
        age: Joi.number().required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    })
    const { error } = userValidation.validate(req.body);
    if (error) {
        return res.status(400).json(error.message)
    }

    const { name, age, email, password } = req.body;
    try {
        const existUser = await User.exists({ email });
        if (existUser) {
            return res.status(400).json("This email is already taken!")
        }
    } catch (error) {
        res.status(500).json(error)
    }

    const salt = await bcrypt.genSalt(10);
    const haspassword = await bcrypt.hash(password, salt)

    const user = new User({
        name, age, email, password: haspassword
    });

    try {
        await user.save();
    } catch (error) {
        return res.status(500).json(error)
    }
    res.status(201).json(user)
}

// filter 
const user_filter = async (req, res) => {
    const { name, age } = req.query;
    let user;
    try {
        user = await User.find({ name, age: { $gte: age } })
        .select("-updatedAt -password -__v")
        // .count()
    } catch (error) {
        return res.status(500).json(error)
    }
    if (!user) {
        return res.status(404).json("User is not found!")
    }
    res.status(200).json({ msg: user })
}

const sort_user = async (req, res) => {
    let user;
    try {
        user = await User.aggregate([
            { $sort: { name: 1, age: -1 } },
            { $limit: 1 },
            { $project: { updatedAt: 0, __v: 0, password: 0 } }
        ])
    } catch (error) {
        return res.status(500).json(error)
    }
    if (!user) {
        return res.status(404).json("User is not found!")
    }
    res.status(200).json({ msg: user })
};




module.exports = { register, user_filter, sort_user }