requestAnimationFrame("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");

const app = express();

const PORT = process.env.PORT || 9000;

//Add routes here. Below is example route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is listening on the port ${PORT");
});
