const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

class Users {
    signup(res, req, next){
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const passwordCheck = req.body.passwordCheck;

        if (password = passwordCheck) {
            User.create({
                name : name,
                email : email,
                password : password,
            }) 
            .then(() => res.status(201).json({ message : 'New user created' }))
            .catch(error => res.status(500).json({ error }))
        } else {
            res.statusMessage = ('Passwords doesn\'t match !')
            res.status(400).end()
        }
    };

    login (res, req, next){
        const password = req.body.password;
        const email = req.body.email;
    }
};

module.exports = Users;