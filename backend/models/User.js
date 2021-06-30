module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        email : {
            type : Sequelize.STRING,
            unique : true,
            isEmail : true
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        },
    });

    return User;
}