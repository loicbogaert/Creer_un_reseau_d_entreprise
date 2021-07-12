module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name : {
            type : Sequelize.STRING,
            allowNull : false,
            validate : {is : /^(?!<script>$|<\/script>$).*/},
            min : 2
        },
        email : {
            type : Sequelize.STRING,
            unique : true,
            isEmail : true,
            validate : {is : /^(?!<script>$|<\/script>$).*/},
            min : 2
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false,
            validate : {is : /^(?!<script>$|<\/script>$).*/},
            min : 2
        },
    });

    return User;
}