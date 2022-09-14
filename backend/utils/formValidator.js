const Joi = require('joi');
const {schema}=require('./formSchema')
const validator=(req, res, next) => {
    const data=req.body
    const {error}=schema.validate(data)
    if(error){
      res.status(422).json({
              status: 'error',
              message: 'Invalid request data',
              data: data
            });
    }else{
      next()
    }
  }

module.exports={validator}