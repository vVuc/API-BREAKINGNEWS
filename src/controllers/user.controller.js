import {createService, findAllService, updateService} from '../services/user.service.js'

const create = async (req, res) => {
    try {
        const {name, username, email, password, avatar, background} = req.body;

        if (!name || !username || !email || !password || !avatar || !background) {
            return res.status(400).send({"menssage": "Submit all filds for registration"})

        }
        const user = await createService(req.body)

        if (!user) {
            return res.status(400).send({messege: 'error creating User'})
        }
        return res.status(201).send(
            {
                message: "User create successfully",
                user: {
                    id: user._id,
                    name,
                    username,
                    email,
                    avatar,
                    background
                }
            })
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}

const findAll = async (req, res) => {
    try {
        const users = await findAllService()

        if (users.length === 0) return res.status(400).send({messege: "there are no regitered user"})

        return res.send(users)
    } catch (err) {
        return res.status(500).send({err: err.message})
    }
}

const findById = async (req, res) => {
    try {
        const {user} = req
        return res.send(user)
    } catch (err) {
        return res.status(500).send({err: err.message})

    }
}

const update = async (req, res) => {
    try {
        const {name, username, email, password, avatar, background} = req.body;

        if (!name && !username && !email && !password && !avatar && !background) {
            return res.status(400).send({"menssage": "Submit at least one fild for update"})
        }

        const {id, user} = req;

        await updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        );

        return res.send({messege: "User successfuly update!"})
    } catch (err) {
        return res.status(500).send({err: err.messege})
    }
}
export {
    create,
    findAll,
    findById,
    update
}