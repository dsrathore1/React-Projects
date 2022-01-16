const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    age: { type: Number, require: true },
    email: { type: String },
    blog: { type: String, require: true },
    date: { type: Date, default: Date.now }
});

const crudModel = new mongoose.model("crudTest", crudSchema);

module.exports = crudModel;