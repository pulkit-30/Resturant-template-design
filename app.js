const express = require("express");
const path = require("path");
const bodyparser=require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render('home');
});
app.get("/contact", (req, res) => {
  res.render('contact');
});
app.post("/constact",(req,res)=>{
  res.redirect('/');
})
app.listen(80, () => {
  console.log("running");
});
