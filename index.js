const express = require("express");
const app = express();
const ejs = require("ejs");

const people = ["geddy", "neil", "alex"];
const html = ejs.render('<%= people.join(", "); %>', { people: people });

app.get("/", (req, res) => res.send(html));
app.listen(3000, () => console.log("Example app listening on port 3000!"));
