const mongoose = require('mongoose');
const connectDataBase = () => {
    console.log('Wait connecting to the DataBase');

    mongoose.connect('mongodb+srv://Mine2015:Mine2015@breakingnews.k3y01iy.mongodb.net/mongodb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB connected')).catch(() => console.log('MongoDB not connected'));
}

module.exports = connectDataBase;
