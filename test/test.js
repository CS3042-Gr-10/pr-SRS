const fs = require('fs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '35.192.149.32',
    user: 'root',
    password: 'admin',
    database: 'test1',
    ssl: {
        ca: fs.readFileSync('./ssl-keys/server-ca.pem'),
        key: fs.readFileSync('./ssl-keys/client-key.pem'),
        cert: fs.readFileSync('./ssl-keys/client-cert.pem')
    }
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
   
connection.end();