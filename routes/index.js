var express = require("express");
var router = express.Router();
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

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// Post from new message form
router.post("/new", (req, res) => {
  const { message, name } = req.body;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

module.exports = router;
