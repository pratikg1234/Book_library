const mongoose = require("mongoose")

const librarianSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    }
});

//here Books is a model which we have created in mongoDB
module.exports = new mongoose.model("Librarian", librarianSchema);