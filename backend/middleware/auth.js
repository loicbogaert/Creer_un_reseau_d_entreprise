const jwt = require('jsonwebtoken');
require('dotenv').config();
const TOKEN = process.env.SECRET_TOKEN;

module.exports = (req, res, next) => {
    console.log(req.body)
    try {   
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, TOKEN);
        const userId = decodedToken.userId;
        if(req.body.userId != userId) {
            console.log("oui")
            console.log(req.body.userId)
            console.log(userId)
            throw 'User ID non valable !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ message : 'Action not allowed !' });
    }
};