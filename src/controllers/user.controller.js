const userService = require('../services/user.service')
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

module.exports = { create }