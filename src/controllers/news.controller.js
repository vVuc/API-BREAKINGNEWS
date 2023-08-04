import {createService, findAllService} from "../services/news.service.js"

const create = async (req, res) => {
    try {
        const {title, text, banner} = req.body;
        console.log(req.userId)
        await createService({
            title,
            text,
            banner,
            user: req.userId,
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