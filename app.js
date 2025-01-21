const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const { router } = require('./router');
const { connectDB } = require('./db');
connectDB();


// Routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
app.listen(process.env.PORT, () => console.log(`server is connected at http://localhost:${3000}`))

module.exports = app;