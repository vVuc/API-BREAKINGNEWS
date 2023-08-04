import {loginService,generateToken} from '../services/auth.service.js';
import bcrypt from "bcrypt";
import User from "../models/User.js";

const login = async (req, res) => {

    try {
        const {email, password} = req.body;

        const user = await loginService(email);

        if (!user)
            return res.status(404).send({message: "User or password not found"});

        const passwoedIsValid = await bcrypt.compare(password, user.password);

        if (!passwoedIsValid)
            return res.status(404).send({message: "User or password not found"});

        const token = generateToken(User.id,)

        return res.send({token});
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export {login}
