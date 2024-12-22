const express = require('express')
const mongoose = require('mongoose');
const Article = require("./models/article.model.js");
const articleRoute = require("./routes/article.route.js");
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/articles", articleRoute);

app.get("/", (req, res) => {
  res.send("This is the default Page");
});

mongoose
.connect("mongodb+srv://admin01:MIlIURCl4imSgAo1@nodebackend.9x0tl.mongodb.net/API-Node?retryWrites=true&w=majority&appName=NodeBackend"
)
.then(() => {
  console.log("Connected to database!");
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
})
.catch(() => {
  console.log("Connection failed!");
});