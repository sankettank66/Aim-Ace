// "use strict";
const express = require("express");
// const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const path=require('path');
const requiredPath=path.join(__dirname,'/public');
console.log(requiredPath);
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.static(requiredPath));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/credentials");
let db = mongoose.connection;
db.on("error", () => console.log("error occurs"));
db.once("open", () => console.log("connected"));


app.post("/signup", (req, res) => {
  let name = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let data = {
    name: name,
    email: email,
    password: password,
  };
  let bool=true;
  // db.collection("users").findOne({name:name}, (err, collection) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("THIS USERNAME IS ALREDY EXIST");
  //     res.send("<H1>THIS USERNAME IS ALREDY EXIST</H1>");
  //     bool=false;
  //     return res.redirect(`${requiredPath}/index.html`);
  //   }
  // });
  if(bool==true)
  {

    db.collection("users").insertOne(data, (err, collection) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Record inserted successfully");
      }
    });
    //   alert("CONGRATULATIONS YOU'RE REGISTRED SUCCESSFULY!!!");
    return res.redirect("login.html");
  }
});
app.post("/login", (req, res) => {
    let name = req.body.username;
    let password = req.body.password;
    let data = {
      name: name,
      password: password,
    };
    db.collection("users").findOne({name:name}, (err, collection) => {
      if (err) {
        console.log(err);
      } else {
        console.log("YOU LOGGED IN SUCCESSFULLY!!!");
        // res.send("login successful");
        res.sendFile(`${requiredPath}/home.html`);

      }
    });
  });
  

app.get("/", (req, res) => {
  // res.send("hello from server");
  res.set({ "Access-Control-Allow-Origin": "*" });
  return res.redirect("index.html");
});
app.get("/login",(req,res)=>{
    res.set({ "Access-Control-Allow-Origin": "*" });
    // res.render("./public/login");
    res.sendFile(`${requiredPath}/login.html`);
})
// app.get("*",(req,res)=>{
//   res.write("this page is not found")
// })
app.listen(3000);
console.log("listening on http://127.0.0.1:3000");
/*
idea
tech
presentation
*/