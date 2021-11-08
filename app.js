const express = require("express");

const app = express();
// app.use('/', );

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
