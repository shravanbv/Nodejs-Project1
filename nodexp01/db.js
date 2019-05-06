var mysql = require('mysql'); 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Syntel123$',
    database: 'nodeapp'
});

connection.connect(function(err){
    if (!err){
        console.log('connected to mysql');
    }
    else{
        console.log(err);
    }
});

module.exports = connection;
