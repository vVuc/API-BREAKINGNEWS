import jwt from "jsonwebtoken";
import {findByIdService} from "../services/user.service.js"

export const authMiddleware = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        const parts = authorization.split(' ');

        if (!authorization)
            return res.sendStatus(401);

        const [Schema, token] = parts;

        if (parts.length !== 2)
            return res.sendStatus(401);

        if (Schema !== "Bearer")
            return res.sendStatus(401);

        jwt.verify(token, process.env.PrivateKey_jwt, async (error, decoded) => {
            if (error)
                return res.status(401).send({message: "Token Invalid"});

            const user = await findByIdService(decoded.id);

            //O id pode até ser valido mais temos que verificar se ele ainda está cadastrado no sistema
            if (!user || !user.id)
                return res.status(401).send({message: "Token Invalid"});

            req.userId = user._id
            return next();
        })

    } catch (err) {
        return res.status(500).send({err: err.message})

    }
}