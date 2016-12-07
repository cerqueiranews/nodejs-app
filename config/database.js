var mysql = require('mysql');

function createConnection() {
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pl34fd7743',
        database: 'estudo'
    });

    return conn;
}

module.exports = function() {
    return createConnection;
}
