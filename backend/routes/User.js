const express = require('express');
const router = express.Router();
const Users = require('../controllers/user');
const userCtrl = new Users();


/* Routers leading to Users controllers*/

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);



module.exports = router;