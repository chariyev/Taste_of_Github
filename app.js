const { urlencoded } = require("express");
const express = require("express");
const home = require("./routes/home");
const products = require("./routes/products");
const customers = require("./routes/customers");

//MIDDLEWARE SECTION
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home);
app.use("/api/v1/products", products);
app.use("/api/v1/customers", customers);

//PORT SECTION
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
