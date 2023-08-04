import express from 'express'
import doteEnv from 'dotenv'
import connectDataBase from "./src/database/db.js";
import userRoute from './src/routes/user.route.js'
import authRoute from './src/routes/auth.route.js'
import newsRoute from "./src/routes/news.route.js";

doteEnv.config();

const app = express()
const port = process.env.PORT ?? 3000

connectDataBase();
app.use(express.json());
app.use("/user", userRoute);
app.use('/auth', authRoute)
app.use('/news', newsRoute)
app.listen(port, () => console.log(`Servidor aberto na porta ${port}`))