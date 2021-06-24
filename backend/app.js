const express = require('express');
const userRoutes = require('./routes/User');
const cors = require('cors');

/** Sync sequelize models */
const db = require("./models");
const { sequelize } = require('./models');
db.sequelize.sync();

/*app*/ 
const app = express();

    /**cors headers */
    app.use(cors())

sequelize.query("SELECT * from users", { type: sequelize.QueryTypes.SELECT})
    .then(function(users){
        console.log(users);
    })

    /*init routes*/
    app.use(express.json());
    app.use('/api/auth', userRoutes);

module.exports = app;