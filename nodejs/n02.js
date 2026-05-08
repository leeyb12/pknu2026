const express = require("express");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1><a href="/hi">인사로 가기</a>`);
});

app.get("/hi", (req, res) => {
  res.send("hihihi");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});