const Router = require('express').Router();
const crudModel = require("../Model/crudModel");

Router.get("/", async (req, res) => {
    const blog = new crudModel({
        name: "DP",
        age: 21,
        blog: "This is my second blog for testing my application."
    });
    try {
        await blog.save();
        console.log("Your data is inserted");
        // res.send("Your data is inserted");
        res.render("index.ejs");
    } catch (error) {
        console.log(error);
    }
});

module.exports = Router;