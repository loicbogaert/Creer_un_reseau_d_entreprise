require('dotenv').config();

module.exports = {
    HOST : process.env.HOST_BDD,
    USER : process.env.USER_BDD,
    PASSWORD : process.env.PASSWORD_BDD,
    DB : "groupomania",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire : 30000,
        idle: 10000
    }
};
