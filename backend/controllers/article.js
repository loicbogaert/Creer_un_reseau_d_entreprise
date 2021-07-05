const { articles } = require("../models");
const db = require("../models");
const Article = db.articles;

class Articles {
    createArticle(req, res, next){
        const article = req.body.article;
        const title = req.body.title;
        const userName = req.body.userName;
        const date = Date().slice(0, 24);

        Article.create({
            article : article,
            title : title,
            userName : userName,
            date : date
        })
        .then(() => res.status(201).json({ message : 'Article Created !' }))
        .catch(error => res.status(400).json({ error }))
    };

    showArticle(req, res, next) {
        Article.findAll()
       .then(articles => res.status(201).json(articles))
       .catch(error => res.status(400).json({ error }) )
    };
};

module.exports = Articles;