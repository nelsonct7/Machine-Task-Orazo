const express = require('express');
const router = express.Router();
const {registerAdmin,authAdmin,getRequirements,validateTocken}=require('../controllers/adminController')
const tockenValidator=require('../utils/tockenValidator')

/* register */
router.route('/register').post(registerAdmin)

/* login */
router.route('/login').post(authAdmin)

/*fetch data */
router.route('/getrequirements').get(tockenValidator,getRequirements)

/*fetch data */
router.route('/validatetocken').get(tockenValidator,validateTocken)

module.exports = router;
