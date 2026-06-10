const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

let student = {
  name: "Parth",
  email: "dfdsf@gmail.com",
  age: 2,
};

// let color="red";

//  console.log(req.url);
// console.log(req.params);
// console.log(req.query);

app.get("/", (req, res) => {
  console.log("home page...");
  // res.send("hhhh..")
  res.render("user", { student });
});

app.listen(port, () => {
  console.log("server is running");
});
