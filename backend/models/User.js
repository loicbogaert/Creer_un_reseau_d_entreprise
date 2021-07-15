module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name : {
            type : Sequelize.STRING,
            allowNull : false,
            unique : {
                msg : 'This name was already taken, please choose a new one'
            },
            validate : {is : /^(?!<script>).{2,}$/},
            min : 2
        },
        email : {
            type : Sequelize.STRING,
            unique : {
                msg : 'This email was already taken, please use a new one'
            },
            isEmail : true,
            validate : {is : /^(?!<script>).{2,}$/},
            min : 2
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false,
            validate : {is : /^(?!<script>).{2,}$/},
            min : 2
        },
    });

    return User;
}