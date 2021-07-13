const express = require('express');
const userRoutes = require('./routes/User');
const articleRoutes = require('./routes/Article')
const commentsRoutes = require('./routes/Comments')
const helmet = require('helmet');
const cors = require('cors');

/** Sync sequelize models */
const db = require("./models");
const { sequelize } = require('./models');
db.sequelize.sync();

/*app*/ 
const app = express();

    /**cors headers */
    app.use(helmet());
    app.use(cors());

sequelize.query("SELECT * from users", { type: sequelize.QueryTypes.SELECT })
    .then(function(users){
        console.log(users);
    })

sequelize.query("SELECT * from articles", { type: sequelize.QueryTypes.SELECT })
.then(function(articles){
    console.log(articles);
})



    /*init routes*/
    app.use(express.json());
    app.use('/api/auth', userRoutes);
    app.use('/api/article', articleRoutes);
    app.use('/api/comments', commentsRoutes);

module.exports = app;