var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

const filePath = path.join(__dirname, '../data/messages.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(filePath);
});

router.get('/:id', function (req, res, next) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    let messages = JSON.parse(data);
    res.json(messages.filter(m => m.id === Number(req.params.id))[0]);
  });
});

router.post('/', function (req, res, next) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    const messages = JSON.parse(data);
    const newId = Math.max(...messages.map(m => Number(m.id))) + 1;
    const newMessage = { id: newId, text: req.body.message, status: 'new' };
    messages.push(newMessage);
    fs.writeFile(filePath, JSON.stringify(messages), function (err) {
      res.json(newMessage);
    });
  });
});

router.put('/:id', function (req, res, next) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    let messages = JSON.parse(data);
    let updatedMessage;
    messages = messages.map(message => {
      if (message.id !== Number(req.params.id)) {
        return message;
      }
      message.text = req.body.text;
      message.status = req.body.status === 'new' ? 'read' : 'new';
      updatedMessage = message;
      return message;
    });
    fs.writeFile(filePath, JSON.stringify(messages), function (err) {
      res.json(updatedMessage);
    });
  });
});

router.delete('/:id', function (req, res, next) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    let messages = JSON.parse(data);
    messages = messages.filter(message => {
      return message.id !== req.params.id;
    });
    fs.writeFile(filePath, JSON.stringify(messages), function (err) {
      res.end();
    });
  });
});

module.exports = router;
