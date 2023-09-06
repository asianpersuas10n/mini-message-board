var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const messages = [
    {
      text: "hello world",
      user: "me",
      added: new Date(),
    },
    {
      text: "hi there",
      user: "test",
      added: new Date(),
    },
  ];
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// Post from new message form
router.post("/new");

module.exports = router;
