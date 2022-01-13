// exercicio 2index.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const axios = require('axios');
// const { isValidToken } = require('./middleware/validation');
// const PORT = 3000;
// const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.get(
//   '/btc/price',
//   isValidToken,
//   async (_req, res) => {
//     const result = await axios.get(ENDPOINTEXTERNALAPI);

//     res.status(200).json(result.data);
//   }
// );

// app.listen(PORT, () => console.log('Run server http://localhost:3000'));

// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/userRouter');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));