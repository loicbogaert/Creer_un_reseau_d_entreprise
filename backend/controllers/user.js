const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

class Users {
    signup(req, res, next){
        console.log(req.body);
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const passwordCheck = req.body.passwordCheck;

        if (password === passwordCheck) {
            console.log("yes")
            User.create({
                name : name,
                email : email,
                password : password
            }) 
            .then(() => res.status(201).json({ message : 'New user created' }))
            .catch(error => res.status(500).json({ error }))
        } else {
            res.statusMessage = ('Passwords doesn\'t match !')
            res.status(400).end()
        }
    };

    login (req, res, next){
        const password = req.body.password;
        const email = req.body.email;
        User.findOne({
            where : { email : email }
        })
        .then(user => {
            console.log(password);
            console.log(user.password);
            if(!user) {
                return res.status(401).json({ error : 'User not found' })
            } else if (password != user.password) {
                return res.status(401).json({error : 'Incorrect Password' })
            } else {
                res.statusMessage = ('Logged successfully !')
                res.status(201).end()
            }
        })
        .catch(error => res.status(500).json({ error }));
    };
};

module.exports = Users;