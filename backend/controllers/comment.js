const db = require("../models");
const Comment = db.comments;

class Comments {
    articleComments(req, res, next) {
        const comment = req.body.comment;
        const userName = req.body.userName;
        const date = Date().slice(0, 24);
        const id = req.body.id;

        Comment.create({
            comment : comment, 
            userName : userName,
            date : date,
            articleId : id
        }).then(() => res.status(201).json({ message : 'Comment sent !' }))
        .catch(error => res.status(400).json({ error }))
    }

    commentsById(req, res, next) {
        Comment.findAll({
            order : [['updatedAt', 'DESC' ]],
            where : {
                articleId: req.body.id
            },
        }).then(comments => res.status(201).json(comments))
        .catch(error => res.status(400).json({ error }))
    }
};

module.exports = Comments;