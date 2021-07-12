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
            date : date,
            comments : []
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

        Article.updateOne({ id : req.params.id }, { ...articleObject, id: req.params.id })
            .then (() => res.status(200).json({ message : 'Article modified !'}))
            .catch(error => res.status(400).json({ error }));
    }
};

module.exports = Articles;