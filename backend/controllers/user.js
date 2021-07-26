const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;
const CryptoJS = require('crypto-js');
require('dotenv').config();


class Users {

        /**Signup block */
    signup(req, res, next){
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const passwordCheck = req.body.passwordCheck;
        var key = CryptoJS.enc.Hex.parse(process.env.CRYPTOJS_KEY);
        var iv = CryptoJS.enc.Hex.parse(process.env.CRYPTOJS_IV);
        var encrypted = CryptoJS.AES.encrypt(email, key,{iv:iv}).toString();

/**If both passwords sent match, hash password, create user + assign a token*/
        if(password === passwordCheck) {
            if(/^(?=.*[A-Za-z1-9]{8,})(?=.*[0-9])(?=.*[A-Z])/.test(password)) {
                bcrypt.genSalt(SALT_WORK_FACTOR)
                .then(salt => {
                    /**hash */
                    bcrypt.hash(req.body.password, salt)
                    .then(hash => {
                        User.create({
                            name : name,
                            email : encrypted || email,
                            password : hash
                        })
                    .then(() => res.status(201).json({ message : 'New user created' }))
                    .catch(error => res.status(400).json({ error })), res.statusMessage = ('Sequelize Error');
                    })
                    .catch(error => res.status(500).json({ error }), res.statusMessage = ('Server Error :('));
                })
            } else {
                res.statusMessage = ('Password must contain 8 characters, an uppercase and one number')
                res.status(400).end()
            }
        } else {
            res.statusMessage = ('Passwords doesn\'t match !')
            res.status(400).end()
    };
};

    /**Login block */
    login (req, res, next){
        const password = req.body.password;
        const email = req.body.email;
        var key = CryptoJS.enc.Hex.parse(process.env.CRYPTOJS_KEY);
        var iv = CryptoJS.enc.Hex.parse(process.env.CRYPTOJS_IV);
        var encrypted = CryptoJS.AES.encrypt(email, key,{iv:iv}).toString();

        /**If user was found, check password, then log the user in*/
        User.findOne({ where : { email : encrypted }})
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
                            { userId: user.id,
                              userName : user.name      
                            },
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
        var key = CryptoJS.enc.Hex.parse(process.env.CRYPTOJS_KEY);
        var iv = CryptoJS.enc.Hex.parse(process.env.CRYPTOJS_IV);
        var encrypted = CryptoJS.AES.encrypt(email, key,{iv:iv}).toString();

        /**If user was found, check password, then log the user in*/
        User.findOne({ where : { email : encrypted }})
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