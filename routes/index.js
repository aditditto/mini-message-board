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

/* GET new message form */
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  console.log(req.body);
  messages.push({
    text: req.body.msg,
    user: req.body.usrname,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
