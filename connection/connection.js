const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://pratikgaikwad20:pratik@bookapp.sed3rfp.mongodb.net/BookApp?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=> console.log("MongoDB Connected"));