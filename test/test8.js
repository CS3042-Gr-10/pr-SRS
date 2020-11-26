const fs = require('fs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '34.93.201.200',
    user: 'root',
    password: 'admin',
    ssl: {
        ca: fs.readFileSync('./ssl-keys-8/server-ca.pem'),
        key: fs.readFileSync('./ssl-keys-8/client-key.pem'),
        cert: fs.readFileSync('./ssl-keys-8/client-cert.pem')
    }
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
   
connection.end();