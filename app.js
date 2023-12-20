const express = require("express");
const app = express();
const cors= require("cors")
const bookRoute = require("./routes/booksRoute")
const userRoute = require("./routes/UserRoute")

require("./connection/connection")
app.use(cors());
app.use(express.json())//for using json while sending response
//we can create routes & server with help of express
//creating a route for books
app.use("/api/v1",bookRoute)

app.use("/api/v1",userRoute)
app.listen(1000,()=>{
    console.log('Server is running on port 1000')
});