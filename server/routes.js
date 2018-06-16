const express = require('express');
const router = express.Router();

const auth = require('./src/auth/routes');

const employee = require('./src/employee/route');

router.use('/auth/', auth);
router.use('/employee/', employee);

module.exports = router;