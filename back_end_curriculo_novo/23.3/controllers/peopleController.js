const rescue = require('express-rescue');
const people = require('express').Router();
const joi = require('joi');

const peopleService = require('../services/peopleService');

const peopleSchema = joi.object({
  name: joi.string().min(3).required(),
  age: joi.number().min(1).required(),
});

const validatePeopleSchema = (body) => {
  const { error } = peopleSchema.validate(body);

  if (error) {
    throw error;
  }
};

people.post('/', rescue(async (req, res)=>{
  validatePeopleSchema(req.body);
  const { name, age } = req.body;
  const newPerson = await peopleService.add({ name, age });
  res.status(201).json(newPerson);
}));

people.get('/:id', rescue(async (req,res) => {
  const person = await peopleService.getById(req.params.id);
  res.status(200).json(person);
}) 
);

people.put('/:id', rescue(async(req,res)=> {
validatePeopleSchema(req.body);
const { id } = req.params;
const { name, age } = req.body;
const updatedPerson = await peopleService.update({id, name, age});
res.status(200).json(updatedPerson)
})
);

people.delete(
  '/:id',
  rescue(async (req, res) => {
    await peopleService.remove(req.params.id);

    res.status(204).end();
  })
);

module.exports = people;