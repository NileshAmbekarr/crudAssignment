const express = require('express')

const {home, register, login} = require('../Controllers/userControllers.js')

const router = express.Router();

router.get('/', home );
router.post('/register', register);
router.post('/login', login)

module.exports = router; // exported router