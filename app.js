const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

var langSelector = "";

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res) => {
    langSelector = "/EU";
    res.render("Home-BG", {langSelected: langSelector});
})

app.get("/EU", (req,res) => {
    langSelector = "/";
    res.render("Home-EN", {langSelected : langSelector});
})

app.listen(port, () => {
    console.log("App is listening on port: " + port);
})