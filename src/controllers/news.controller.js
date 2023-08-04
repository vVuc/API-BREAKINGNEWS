import {createService, findAllService} from "../services/news.service.js"

const create = async (req, res) => {
    try {
        const {title, text, banner} = req.body;
        const {authorization} = req.headers
        const parts = authorization.split(' ')
        const [Schema, token] = parts

        if (!authorization)
            return res.sendStatus(401)

        if (parts.length !== 2)
            return res.sendStatus(401)

        if (Schema === "Bearer")
            return res.sendStatus(401)

        if (!title || !text || !banner)
            return res.status(400).send({"menssage": "Submit all filds for registration"})

        await createService({
            title,
            text,
            banner,
            user: {_id: "64cbc01a2ffc4cd7f2a85287"},
        })

        return res.sendStatus(201);
    } catch (err) {
        return res.status(500).send({err: err.message})
    }
}

const findAll = async (req, res) => {
    const news = await findAllService();
    if (news.length === 0)
        return res.status.send({
            message: "There are no registered news"
        })
    return res.send(news)
}

export {create, findAll}