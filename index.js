const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("hello world");
});

app.listen(3000, () => {
  console.log("listening");
});
