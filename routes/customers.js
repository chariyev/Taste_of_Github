const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "Super",
    message: "Recieved",
    page: "Customers",
  });
});

module.exports = router;
