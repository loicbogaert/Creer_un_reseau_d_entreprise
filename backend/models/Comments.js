module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
        comment : {
            type : Sequelize.TEXT,
            allowNull : false,
            validate :{
                is : {
                    args : ["^(?!<script>$|<\/script>$).*"]
                },
                is: {
                    args:["^[A-z-0-9]{1,}"],
                    msg:"Comments should not be empty"
                }
            }
        },
        userName : {
            type : Sequelize.STRING,
            allowNull : false,
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