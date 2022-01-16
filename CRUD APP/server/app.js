const express = require("express");
const dotenv = require("dotenv");

const mainRoutes = require('./Routes/routes');
const connectDB = require("./DB/connectDB");

const PORT = process.env.PORT || 4000;

dotenv.config({ path: "config.env" });

const app = express();

app.set("view engine", "ejs");

app.use(express.static('Public'));
app.use(mainRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Your site is live on http://localhost:${PORT}`);
});