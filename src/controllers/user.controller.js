const create = (req, res) => {
    const { name, userName, email, password, avatar, background } = req.body;
    if (!name || !userName || !email || !password || !avatar || !background) {
        res.status(400).send({ "menssage": "Submit all filds for registration" })
    }
    res.status(201).json({message:"User create successfully", user: { name, userName, email, avatar, background } })
}
module.exports = { create }