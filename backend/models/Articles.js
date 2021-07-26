module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        title : {
            type : Sequelize.STRING,
            allowNull : false,
            validate : {
                is : {
                    args : ["^(?!<script>).{2,}$"],
                    msg : "Minimum 2 characters required in title"
                }
            }
        },
        article : {
            type : Sequelize.TEXT,
            allowNull : false,
            validate :{
                is: {
                    args: ["^(?!<script>).{10,}$"],
                    msg:"Minimum 10 characters required for an article"
                },
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