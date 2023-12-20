const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    genres:{
        type:String,
        required:true
    },
    excerpt:{//same as description of book
        type:String,
        required:true
    },
    available:{
        type:Boolean,
    }
});

//here Books is a model which we have created in mongoDB
module.exports = new mongoose.model("Books", bookSchema);