// const express= require('express')
// const bodyParser = require('body-parser')

// const app = express();

// app.use(bodyParser.json());

// app.get('/ping',(_req, res)=> res.json({"message":"pong"}));

// app.post('/hello',(req,res)=>{
//   const {name} = req.body;
//   res.status(200).json({"message":`Hello,${name}`})
// })



// app.post('/greetings', (req, res) => {
//   const { name, age } = req.body;

//   if (parseInt(age, 10) <= 17) {
//     return res.status(401).json({ message: `Unauthorized` });
//   }

//   res.status(200).json({ message: `Hello, ${name}!` });
// });

// app.put('/users/:name/:age', (req,res)=>{
//   const {name, age} = req.params;
//   res.status(200).json({"message":`Seu nome é ${name} e você tem ${age} anos de idade`})
// })

// app.listen(3000,()=>console.log('ouvindo na porta 3000'))


const express= require('express')
const rescue = require('express-rescue');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const simpsonsUtils = require('./fs-utils');


app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}))

/* ... */

// app.get(
//   '/simpsons/:id',
//   rescue(async (req, res) => {
//     const simpsons = await simpsonsUtils.getSimpsons();

//     const simpson = simpsons.find(({ id }) => id === req.params.id);

//     if (!simpson) {
//       return res.status(404).json({ message: 'simpson not found' });
//     }

//     return res.status(202).json(simpson);
//   })
// );

// /* ... */

//  app.listen(3000,()=>console.log('ouvindo na porta 3000'))
// /* ... */

// /* ... */

// app.post(
//   '/simpsons',
//   rescue(async (req, res) => {
//     const { id, name } = req.body;

//     const simpsons = await simpsonsUtils.getSimpsons();

//     if (simpsons.map(({ id }) => id).includes(id)) {
//       return res.status(409).json({ message: 'id already exists' });
//     }

//     simpsons.push({ id, name });

//     await simpsonsUtils.setSimpsons(simpsons);

//     res.status(204).end();
//   })
// );

/* ... */

// const express = require('express');
// const authMiddleware = require('./authMiddleware');
// const app = express();

// app.use(express.json());
// app.use(authMiddleware);

// /* ... */

// app.use(function (err, req, res, next) {
//   res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
// });

/* ... */


//  const express = require('express');
//  const app = express();
//  const bodyParser = require('body-parser');
//  app.use(bodyParser.json());
// const crypto = require('crypto');
// /* ... */

// app.post('/signup', (req, res) => {
//   const { email, password, firstName, phone } = req.body;

//   if ([email, password, firstName, phone].includes(undefined)) {
//     return res.status(401).json({ message: 'missing fields' });
//   }

//   const token = crypto.randomBytes(8).toString('hex');

//   res.status(200).json({ token });
// })

// /* ... */
// app.listen(3000, () => console.log('ouvindo na porta 3000!'));

