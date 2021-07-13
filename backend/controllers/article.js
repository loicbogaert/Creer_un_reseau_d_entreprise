const db = require("../models");
const Article = db.articles;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const TOKEN = process.env.SECRET_TOKEN;

class Articles {
    createArticle(req, res, next){
        const article = req.body.article;
        const title = req.body.title;
        const userName = req.body.userName;
        const date = Date().slice(0, 24);
        const token = req.body.token;
        const decodedToken = jwt.verify(token, TOKEN);
        const userId = decodedToken.userId;

        Article.create({
            article : article,
            title : title,
            userName : userName,
            date : date,
            comments : [],
            userId : userId
        })
        .then(() => res.status(201).json({ message : 'Article Created !' }))
        .catch(error => res.status(400).json({ error }))
    };

    showArticle(req, res, next) {
        Article.findAll({ order : [['updatedAt', 'DESC' ]]})
       .then(articles => res.status(201).json(articles))
       .catch(error => res.status(400).json({ error }) )
    };

    singleArticle(req, res, next) {
        Article.findOne({
            where: { id: req.body.id }
        })
        .then(article => res.status(201).json(article))
        .catch(error => res.status(400).json({ error }))
    }

    modifyArticle(req, res, next) {
        const articleObject = req.body;
        const id = articleObject.id;
        console.log(articleObject);

        Article.update({ ...articleObject },
            {where : { id : id }})
            .then (() => res.status(200).json({ message : 'Article modified !'}))
            .catch(error => res.status(400).json({ error }));
    }
};

module.exports = Articles;