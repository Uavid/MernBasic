const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Yes, Backend Running Successfully" });
});

module.exports = router;
