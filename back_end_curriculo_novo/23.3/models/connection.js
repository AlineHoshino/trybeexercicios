const mysql = requrie('mysql2/promise');

const connection = mysql.createPoll({
  host:'localhost',
  user:'root',
  password:'trybe123',
  database:'rest_aula'
});

module.exports = connection;