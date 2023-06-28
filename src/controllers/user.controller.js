const userService = require('../services/user.service');
const mongoose = require('mongoose');
const create = async (req, res) => {
    const { name, userName, email, password, avatar, background } = req.body;

    if (!name || !userName || !email || !password || !avatar || !background) {
        res.status(400).send({ "menssage": "Submit all filds for registration" })

    }
    const user = await userService.create(req.body)

    if (!user) {
        return res.status(400).send({ messege: 'error creating User' })
    }
    res.status(201).send(
        {
            message: "User create successfully",
            user: {
                id: user._id,
                name,
                userName,
                email,
                avatar,
                background
            }
        })
}

const findAll = async (req, res) => {
    const users = await userService.findAllService()

    if (users.length === 0) return res.status(400).send({ messege: "there are no regitered user" })

    res.send(users)
}

const findById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ messege: "id not found" })

    const user = await userService.findByIdService(id)

    if (!user) return res.status(400).send({ messege: "user not found" })
    return res.send(user)
}
module.exports = {
    create,
    findAll,
    findById
}