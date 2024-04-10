const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DBs)
  .then(() => {
    console.log('MongoDB is connected !! (*_*)');
  })
  .catch(e => {
    console.log("MongoDB is not connected ", e);
  });
