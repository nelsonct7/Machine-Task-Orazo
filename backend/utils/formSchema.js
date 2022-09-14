const Joi = require('joi');
const schema = Joi.object({
    first_name:Joi.string().required(),
    second_name:Joi.string().required(),
    mobile: Joi.string().regex(/^\d{10}$/).required(),
    email_id: Joi.string().email().required(),
    requirements:Joi.string().required()
  });

module.exports={schema};