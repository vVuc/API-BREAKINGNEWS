import mongoose from 'mongoose';

const connectDataBase = () => {
    console.log('Wait connecting to the DataBase');

    mongoose.connect(process.env.MongodbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('MongoDB connected')).catch(() => console.log('MongoDB not connected'));
}

export default connectDataBase;
