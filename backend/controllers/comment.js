const db = require("../models");
const Comment = db.comments;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const TOKEN = process.env.SECRET_TOKEN;

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

    deleteComment(req, res, next) {
        const id = req.body.id;
        const token = req.body.token;
        const decodedToken = jwt.verify(token, TOKEN);

        if (decodedToken.userName === "Moderator") {
            Comment.destroy({ where : { id : id }})
            .then (() => res.status(200).json({ message : 'Comment Deleted !'}))
            .catch(error => res.status(400).json({ error }));
        }
        else {
            return res.status(401).json({ message : 'Unauthorised Action' })
        }
    }
};

module.exports = Comments;