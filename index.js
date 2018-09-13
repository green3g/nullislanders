const express = require("express");
const app = express();
const ejs = require("ejs");
const home = require("./templates/home")();

const people = ["geddy", "neil", "alex"];
const html = ejs.render('<%= people.join(", "); %>', { people: people });

app.get("/", (req, res) => {
  console.log(home);
  return res.send(home);
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
