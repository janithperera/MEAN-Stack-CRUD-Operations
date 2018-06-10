const express = require('express');
const router = express.Router();

const auth = require('./src/auth/routes');

router.use('/auth/', auth);

module.exports = router;