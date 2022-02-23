const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Hi Shiwang Naidu</h1>`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT} `);
});
