const router = require("express").Router();
const bookModel = require("../models/booksmodel.js");

//post request for adding new books into database
router.post("/add", async (req,res)=>{
    try{
        const newBook = new bookModel(req.body);
        await newBook.save().then(()=>{
            res.status(200).json({message: "New Book Added Successfully"})
        });//it will store in database
    } catch(error){
        console.log(error);
    }
});

// get books from database
router.get("/getBooks",async (req,res)=>{
    let books;
    try{
        books=await bookModel.find();
        //in response we are sending books from database
        res.status(200).json({books});
    } catch(err){ 
        console.log(err);
    }
})

//Getting informtion of single book by its id
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    //storing id
    const id=req.params.id;
    try{
        book= await bookModel.findById(id);
        res.status(200).json({book});
    } catch(err){
        console.log(err)
    }
})

//Update book by id. put for updating the data
router.put("/updateBook/:id", async(req,res)=>{
    const id=req.params.id;
    //destructuring of data
    const {title,author, image, price, genres, excerpt} = req.body;
    let book;
    try{
        //updated data is in book variable
        book=await bookModel.findByIdAndUpdate(id, {
            title,author, image, price, genres, excerpt
        });
        book=await book.save().then(()=> res.json({message:"Data Updated SuccessFully"}));
    } catch(err){
        console.log(err);
    }
});

//Delete book by id
router.delete("/deleteBook/:id",async (req,res)=>{
    const id = req.params.id;
    try{
        await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"Data Deleted SuccessFully."}))
    } catch(err){
        console.log(err)
    }
})
module.exports = router