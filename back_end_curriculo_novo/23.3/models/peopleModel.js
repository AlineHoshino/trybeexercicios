const connection = require('./connection');
// no people model só ficam as queries de consulta ao banco

const add = async(name, age) => {
  const [result] = await connection.query('INSERT INTO people(name, age) VALUES (?,?);', [name, age]);
  return { id: result.insertId , name, age };
};

const getAll = async () => {
  const [result] = await connection.query('SELECT * FROM people');
  return result;
}

const getById = async(id) => {
  const [result] = await connection.query('SELECT * FROM people WHERE id=? ', [id]);
  if(!result.length) return null;
  return result[0];
};

const update = async(id, name, age) => {
  await connection.query('UPDATE people SET name =? , age =? WHERE id=?', [name, age, id]);
};

const remove = async(id) => {
  const people = await getById(id);
  if(!people) return null;
  await connection.query('DELETE FROM people WHERE id=?', [id]);
  return people;
};

module.exports = { add, getAll, getById, update, remove };