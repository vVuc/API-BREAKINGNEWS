const express = require('express')
const userRoute = require('./src/routes/user.route')

const app = express()

app.use("/soma", userRoute)

app.listen(3000)

// app.get('/home', function (req, res) {
//   res.send('Hello World')
// })