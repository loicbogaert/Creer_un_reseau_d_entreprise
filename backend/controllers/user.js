const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;
require('dotenv').config();


class Users {

        /**Signup block */
    signup(req, res, next){
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const passwordCheck = req.body.passwordCheck;

/**If both passwords sent match, hash password, create user + assign a token*/
        if(password === passwordCheck) {
            bcrypt.genSalt(SALT_WORK_FACTOR)
            .then(salt => {
                /**hash */
                bcrypt.hash(req.body.password, salt)
                .then(hash => {
                    User.create({
                        name : name,
                        email : email,
                        password : hash
                    })
                .then(() => res.status(201).json({ message : 'New user created' }))
                .catch(error => res.status(400).json({ error })), res.statusMessage = ('Sequelize Error');
                })
                .catch(error => res.status(500).json({ error }), res.statusMessage = ('Server Error :('));
            })
        } else {
            res.statusMessage = ('Passwords doesn\'t match !')
            res.status(400).end()
    };
};

    /**Login block */
    login (req, res, next){
        const password = req.body.password;
        const email = req.body.email;

        /**If user was found, check password, then log the user in*/
        User.findOne({ where : { email : email }})
        .then(user => {
            if(!user) {
                return res.status(401).json({ error : 'User not found, Your email is probably incorrect' })
            } 
            bcrypt.compare(password, user.password, (err, data) => {
                if(err) throw (error => res.status(500).json({ error }));

                if (data) {
                    return res.status(200).json({
                        userId: user.id,
                        userName: user.name,
                        token: jwt.sign(
                            { userId: user.id },
                            process.env.SECRET_TOKEN,
                            { expiresIn: '24h' }
                        )
                    })

                    /**Password didn't match */

            } else {
                res.status(401).json({ error : 'Incorrect Password, please try again' })
            }
        })
    })
    .catch(error => res.status(500).json({ error }));
    };


    delete (req, res, next) {
        const password = req.body.password;
        const email = req.body.email;

        console.log(email)


        /**If user was found, check password, then log the user in*/
        User.findOne({ where : { email : email }})
        .then(user => {
            if(!user) {
                return res.status(401).json({ error : 'User not found, Your email is probably incorrect' })
            } 
            bcrypt.compare(password, user.password, (err, data) => {
                if(err) throw (error => res.status(500).json({ error }));

                if(data) {
                    User.destroy({ where : { email : email }})
                    .then(() => res.status(201).json({ message : 'Account successfully deleted !' }))
                }
                else {
                    res.status(401).json({ error : 'Incorrect Password, please try again' })
                }
            })
        })
        .catch(error => res.status(500).json({ error }));
        };
};

module.exports = Users;