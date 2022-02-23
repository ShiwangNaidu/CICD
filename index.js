const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hi Shiwang");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT} `);
});
