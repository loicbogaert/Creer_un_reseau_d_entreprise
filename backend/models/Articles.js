module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        title : {
            type : Sequelize.STRING,
            allowNull : false,
            validate :{
                is : {
                    args : ["^(?!<script>$|<\/script>$).*"]
                },
                is : {
                    args: ["^.{2,}"],
                    msg:"Minimum 2 characters required in title"
                },
                is: {
                    args:["^.{0,255}"],
                    msg:"Maximum 250 characters for titles"
                }
            }
        },
        article : {
            type : Sequelize.TEXT,
            allowNull : false,
            validate :{
                is : {
                    args : ["^(?!<script>$|<\/script>$).*"]
                },
                is: {
                    args: ["^.{10,}"],
                    msg:"Minimum 10 characters required for an article"
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
        userId : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });

    return Article;
}