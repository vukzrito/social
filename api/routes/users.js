var express = require('express');
var router = express.Router();
var getPosts = require('../database');
const Sequelize = require('sequelize');
const UserModel = require('../models/user');
const dbConnection = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  const User = UserModel(dbConnection, Sequelize);
  //  User.create(req.body);
  User.findAll().then(users => {
    res.send(users);
  })

});
router.post('/', function (req, res, next) {
  const User = UserModel(dbConnection, Sequelize);
  User.create(req.body).then(result => {
    res.send(result);
  }).catch(err => {

    res.send(500, err);
  })

});

module.exports = router;
