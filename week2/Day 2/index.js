//http server
const express = require("express");
const app = express();
const port = 3000;

//fs.readFil("path","utf-7",())
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/a", function (req, res) {
  res.send("Hello World 2!");
});

app.listen(port, () => {
  console.log("Server is running");
});
