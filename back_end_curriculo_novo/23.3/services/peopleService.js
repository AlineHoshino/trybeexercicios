const peopleModel = require('../models/peopleModel');

const getAll = async () => {
  return peopleModel.getAll();
};

const getById = async (id) => {
  const person = await peopleModel.getById(id);

  if (!person) {
    throw {
      code: 'not_found',
      message: `person with id "${id}" was not found`,
    };
  }

  return person;
};

const add = async ({ name, age }) => {
  return peopleModel.add(name, age);
};

const update = async ({ id, name, age }) => {
  await getById(id);

  const updatedPerson = await peopleModel.update(id, name, age);

  return updatedPerson;
};

const partialUpdate = async (id, data) => {
  const currentPerson = await getById(id);

  const newPersonData = {
    ...currentPerson,
    ...data,
  };

  const updatedPerson = await peopleModel.update({ id, ...newPersonData });

  return updatedPerson;
};

const remove = async (id) => {
  await peopleModel.remove(id);
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  partialUpdate,
  remove,
};