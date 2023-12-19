const mongoose = require('mongoose');
require('dotenv').config()
const connectDb = () => {
    // return mongoose.connect(process.env.MONGODB_URL);
    return mongoose.connect("mongodb://localhost:27017/stock-management-system");
}

module.exports={
 connectDb
}