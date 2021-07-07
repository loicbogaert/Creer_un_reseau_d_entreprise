const express = require('express');
const router = express.Router();
const Articles = require('../controllers/article');
const articleCtrl = new Articles();


/* Routers leading to Users controllers*/

router.post('/', articleCtrl.createArticle);
router.get('/', articleCtrl.showArticle);
router.post('/:id', articleCtrl.singleArticle);



module.exports = router;