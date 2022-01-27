const Router = require('express').Router();
const crudModel = require("../Model/crudModel");

Router.post("/insert", async (req, res) => {
    const crudName = req.body.crudName;
    const crudAge = req.body.crudAge;
    const crudEmail = req.body.crudEmail;
    const crudBlog = req.body.crudBlog;

    const blog = new crudModel({
        name: crudName,
        age: crudAge,
        email: crudEmail,
        blog: crudBlog,
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


Router.get("/read", (req, res) => {
    crudModel.find({}, (error, result) => {
        if (error) {
            res.send(error);
        }
        res.send(result);
    })
});

Router.put("/update", async (req, res) => {
    const newName = req.body.newName;
    const id = req.body.id;

    try {
        await crudModel.findById(id, (err, updateName) => {
            updateName.crudName = newName;
            updateName.save();
            res.send("update");
        })
    } catch (error) {
        console.log(error);
    }
});

Router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await crudModel.findByIdAndRemove(id).exec();
})

module.exports = Router;