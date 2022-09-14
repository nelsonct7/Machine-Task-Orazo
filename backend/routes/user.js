const express = require('express');
const { insertFormData } = require('../controllers/userController');
const { validator } = require('../utils/formValidator');
const router = express.Router();

router.route('/submitform').post(validator,insertFormData)

module.exports = router;