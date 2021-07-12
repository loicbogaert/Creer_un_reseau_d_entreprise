const express = require('express');
const router = express.Router();
const Articles = require('../controllers/article');
const articleCtrl = new Articles();
const auth = require('../middleware/auth');


/* Routers leading to Users controllers*/

router.post('/', articleCtrl.createArticle);
router.get('/', articleCtrl.showArticle);
router.post('/:id', articleCtrl.singleArticle);
router.put('/id', auth, articleCtrl.modifyArticle);



module.exports = router;