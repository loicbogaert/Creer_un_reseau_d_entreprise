const dbConfig = require("../database/database");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool : {
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.iddle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User.js")(sequelize, Sequelize);
db.articles =  require('./Articles.js')(sequelize, Sequelize)
db.comments = require('./Comments.js')(sequelize, Sequelize)

module.exports = db;