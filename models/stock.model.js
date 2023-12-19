const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true,"id of an item is required"],
        unique: true
    },
    nameOfProduct:{
        type:String,
        required:[true,"name of an item is required"],
        unique: true
    },
    amount:{
        type:Number,
        required:[true,"amount of an item is required"]
    },
    measurementUnit:{
        type:String,
        required:[true,"measurement unit of an item is required"]
    },
    price:{
        type:Number,
        required:[true,"price of an item is required"]
    },
    description:{
        type:String,
        required:[true,"description of an item is required"]
    },

});

module.exports = mongoose.model('stock',stockSchema);