const express = require('express')
const { body } = require('express-validator');
const router = express.Router()

router.post('/create', [body('email', "Enter Correct Email Address").isEmail(), body('pwd', "Lenght must be at least 5").isLength({ min: 5 }), body('pwd', "must contain a number").matches(/\d/)], require('../Controllers/storeUser'))
router.post('/', [body('email', "Enter Correct Email Address").isEmail(), body('pwd', "Password cannot be empty").exists()], require('../Controllers/authUser'))
router.post('/getuser', require('../Controllers/getUser'))
module.exports = router