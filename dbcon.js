var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'classmysql.engr.oregonstate.edu',
  user: 'cs340_mayma',
  password: '0755',
  database: 'cs340_mayma'
});
module.exports.pool = pool;
