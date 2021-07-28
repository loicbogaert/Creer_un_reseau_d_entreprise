const jwt = require('jsonwebtoken');
require('dotenv').config();
const TOKEN = process.env.SECRET_TOKEN;
const db = require("../models");
const Article = db.articles;

module.exports = (req, res, next) => {
    try {   
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, TOKEN);
        const userId = decodedToken.userId;
        const articleId = req.body.id;
        Article.findOne({where : { id : articleId }})
        .then((data) => {
            if( decodedToken.userName === "Moderator"){
                next()
            } else if(data.userId != userId) {
                throw 'User ID non valable !';
            } else {
                next();
            }
        });
    } catch (error) {
        res.status(401).json({ message : 'Action not allowed !' });
    }
};