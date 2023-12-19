const mongoose = require('mongoose');
require('dotenv').config()
const connectDb =()=>{
    return mongoose.connect(process.env.MONGODB_URL);

}

module.exports={
 connectDb
}