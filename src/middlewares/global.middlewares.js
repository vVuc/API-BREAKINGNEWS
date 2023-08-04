import mongoose from "mongoose";
import {findByIdService} from "../services/user.service.js";

const validId = (req, res, next) => {
    try {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(400).send({messege: "invalid ID"})

        next()
    } catch (err) {
        return res.status(500).send({err: err.messege})

    }
}

const validUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await findByIdService(id)

        if (!user)
            return res.status(400).send({messege: 'User not found'})

        req.id = id
        req.user = user
        next();
    } catch (err) {
        return res.status(500).send({err: err.messege})

    }
}

export {validUser, validId}