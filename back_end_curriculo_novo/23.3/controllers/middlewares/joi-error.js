const joi = require('joi');
module.exports = (err,req,res,next) => {
  if(!joi.isError(err)){
    return next(err);
  }
  res.status(422).josn({code:'unprocessable_entity', message: err.message})
}