const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/User');

/** Sync sequelize models */
const db = require("./models");
db.sequelize.sync();

const app = express();


/*app*/ 

    /**headers */
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
      });

    /*init routes*/
    app.use(bodyParser.json());
    app.use('/api/auth', userRoutes);

module.exports = app;