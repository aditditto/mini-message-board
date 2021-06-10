var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "ohmygodohmygod",
    user: "comb",
    added: new Date()
  },
  {
    text: "Hello there",
    user: "Senor",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
