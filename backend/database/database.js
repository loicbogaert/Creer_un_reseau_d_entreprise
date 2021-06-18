const mysql = require('mysql');


const db = mysql.createConnection ({
    host : "localhost",
    user: "loic",
    password : "yesyes62120^^",
    database : "groupomania"
});

 const connect = () => db.connect(function(err) {
    if(err) throw err;
    console.log("Succesfully connected to MySQL database !");
    db.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
         console.log(result);
      });
}) 

module.exports = {
    connect
};
