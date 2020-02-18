const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('./users-model.js')
const secrets = require('../secrets/secrets.js')
const db = require('../data/dbConfig.js')

const router = express.Router();

router.get('/allusers', (req, res) => {
    Users.all()
    .then(users => {
        res.status(200).json({
            response: users
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
})



router.post('/register', (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password, 10)
    Users.add(newUser)
    .then(registeredUser => {
        const token = generateToken(registeredUser)
        res.status(200).json({
            user: registeredUser,
            token: token
        })
    })
    .catch(error => {
        res.status(500).json({
            message: error
        })
    })
});

router.post('/login', (req, res) => {
  const {email , password} = req.body;
    db('users').where({email})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password , user.password)){
            const token = generateToken(user)
            res.status(200).json({
                message: `welcome ${user.email}`,
                token
            })
        } else {
            res.status(404).json({
                message: `user not found`
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: `${err}`
        })
    })
});



function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;