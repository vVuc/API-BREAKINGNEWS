const User = require('../models/User');

const create = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

module.exports = {
    create,
    findAllService,
    findByIdService,
};