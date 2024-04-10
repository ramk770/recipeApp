require('dotenv').config();
const express = require('express');
const mongodb = require('./monodb');
const userRoute = require('./router/userRouter');
const recipeRoute = require('./router/recipeRouter');

const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use('/api/v1/', userRoute);
app.use('/api/v1/', recipeRoute);

//port connection
app.listen(9000, () => {
    console.log('port (9000) is connected!!');
})