const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "Super",
    messages: "Recieved",
    page: "Products",
  });
});

module.exports = router;
