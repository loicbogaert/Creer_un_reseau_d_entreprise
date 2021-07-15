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

        /**Article creation */
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

    /** Display all the articles in the feed (ordered by date)*/
    showArticle(req, res, next) {
        Article.findAll({ order : [['updatedAt', 'DESC' ]]})
       .then(articles => res.status(201).json(articles))
       .catch(error => res.status(400).json({ error }) )
    };

    /** Display only one article (by the ID) */
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
        const title = req.body.title;
        const article = req.body.article;

        /** If title wasn't changed, only the article is modified */
        if (title.length === 0) {
            Article.update({ article : article },
                {where : { id : id }})
                .then (() => res.status(200).json({ message : 'Article modified !'}))
                .catch(error => res.status(400).json({ error }));
        }
        /** If article wasn't changed, only the title is modified */
        else if (article.length === 0) {
            Article.update({ title : title },
                {where : { id : id }})
                .then (() => res.status(200).json({ message : 'Article modified !'}))
                .catch(error => res.status(400).json({ error }));
        }
        /** Both are modified */
        else {
        Article.update({ ...articleObject },
            {where : { id : id }})
            .then (() => res.status(200).json({ message : 'Article modified !'}))
            .catch(error => res.status(400).json({ error }));
        }
    }

    deleteArticle(req, res, next) {
        const userName = req.body.userName;
        const id = req.body.id;

        /** If the username used is Moderator, delete the article */
        if (userName === "Moderator") {
            Article.destroy({ where : { id : id }})
            .then (() => res.status(200).json({ message : 'Article Deleted !'}))
            .catch(error => res.status(400).json({ error }));
        }
        else {
            return res.status(401).json({ message : 'Unauthorised Action' })
        }
    }
};

module.exports = Articles;