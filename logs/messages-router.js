const express = require('express');
const Logs = require('./messages-model')
const restricted = require('../messages-middleware.js')
const router = express.Router();

router.get('/messages', restricted, (req, res) => {
    Logs.find()
    .then(logs => {
        res.status(200).json({
            response: logs
        })
    })
    .catch(error => {
        res.status(500).json({
            message: error
        })
    })
});

router.post('/add', restricted,  (req, res) => {
    const newMessage = req.body
    console.log(newMessage)
    Logs.insert(newMessage)
    .then(messages => {
        res.status(200).json({
            messages
        })
    })
    .catch(err => {
        res.status(500).json({
            response: err
        })
    })
})







module.exports = router;