const express = require('express');
const router = express.Router();
const Comments = require('../controllers/comment');
const commentsCtrl = new Comments();

router.post('/:id', commentsCtrl.articleComments);
router.post('/', commentsCtrl.commentsById);
router.delete('/:id', commentsCtrl.deleteComment);

module.exports = router;