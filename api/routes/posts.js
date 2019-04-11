var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var dbConnection = require('../database');
const PostModel = require('../models/post');
/* GET home page. */
router.get('/', function (req, res, next) {
    const Post = PostModel(dbConnection, Sequelize);
    Post.findAll(req.body).then(result => {
        res.send(201, result);
    }).catch(err => {
        res.send(500, err);
    })
});
router.post('/', function (req, res, next) {
    const Post = PostModel(dbConnection, Sequelize);
    Post.create(req.body).then(result => {
        res.send(result);
    }).catch(err => {

        res.send(500, err);
    })
});

module.exports = router;
