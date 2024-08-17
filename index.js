const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/ap", (req, res) => res.send("Hello My Best Friend."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
