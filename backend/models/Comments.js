module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
        comment : {
            type : Sequelize.TEXT,
            allowNull : false
        },
        userName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        articleId : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });

    return Comments;
}