const router = require("express").Router();
const userModel = require("../models/usermodel.js");
const librarianModel = require("../models/librarianmodel.js");

// POST request for adding new users into the database
router.post("/signupadduser", async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save().then(() => {
            res.status(200).json({ message: "New User Added Successfully" });
        });
    } catch (error) {
        console.log(error);
    }
});

// POST request for adding new librarians into the database
router.post("/signupaddlibrarian", async (req, res) => {
    try {
        const newLibrarian = new librarianModel(req.body);
        await newLibrarian.save().then(() => {
            res.status(200).json({ message: "New Librarian Added Successfully" }); // Changed message for librarians
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
