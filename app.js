const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("Home-BG");
})

app.get("/EU", (req,res) => {
    res.render("Home-EN")
})

app.listen(port, () => {
    console.log("App is listening on port: " + port);
})