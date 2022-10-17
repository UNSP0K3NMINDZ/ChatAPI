var express = require('express');
var router = express.Router();


var data = [
  {id: 1, channel: "news", user: "name 1", message: "first post"},
  {id: 2, channel: "tech", user: "name 2", message: "second post"},
  {id: 3, channel: "misc", user: "name 3", message: "third post"}
];


// GET All Comments
router.get('/:channel', function(req, res, next) {
  res.send(data.filter((element) => {return element.channel == req.params.channel}));
});

// GET single comments
router.get('/:channel/:id', function(req, res, next) {
  var messages = data.filter((element) => {return element.channel == req.params.channel});
  res.send(messages.filter((element) => {return element.id == req.params.id}));
});

router.put('/:channel/', function(req, res, next) {
  var newMessage = {
    user: req.body.user,
    message:req.body.message,
    id: data.length + 1,
    channel: requestAnimationFrame.params.channel
  }; 
  data.push(newMessage);
  res.send(data.filter((element) => {return element.channel == req.params.channel}));
});

router.post('/:id', function(req, res, next) {
  var message = data.filter((element)=>{return element.id == req.params.id})[0];
  var index = data.findIndex((element)=> {return element == message});

  if(message!=undefined){
    message.user = req.body.user;
    message.id = req.params.id;
    message.channel = req.body.channel;
    message.message = req.body.message;

    data[index] = message;
  }
  res.send(message);
});

router.delete('/:id', function(req, res, next) {
  var message = data.filter((element) => {return element.id == req.params.id})[0];

  data = data.filter((element) => {return element.id != req.params.id});
  res.send(message);
});

module.exports = router;
