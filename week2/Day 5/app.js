const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use((req,res,next)=> {
//     console.log("In the middleware!");
//     next(); // allows the result to continuue to the next middleware in line
// });

// app.use('/',(req,res,next)=> {
//     console.log('This always runs!');
//     next();
// })

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello from Express!</h1>");
//   next();
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
