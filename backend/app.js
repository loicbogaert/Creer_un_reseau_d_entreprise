const express = require('express');
const app = express();

/*connection to database*/
const db = require('./database/database');
db.connect();
/*app*/ 

app.use((req, res) => {
    res.json({ message : 'Votre requête a bien été reçue' });
});


module.exports = app;