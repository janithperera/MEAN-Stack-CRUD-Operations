const express = require('express');
const router = express.Router();

//const auth = require('./src/auth/routes');

const DoctorRouter = require('./src/lakshan/doctor.route');
const NurseRouter = require('./src/lakshan/nurse.route');
const AssignRouter = require('./src/lakshan/admin.route');
const MLTRouter = require('./src/lakshan/mlt.route');
const PharmacistRouter = require('./src/lakshan/pharmacist.route');
const GeneralStaffRouter = require('./src/lakshan/generalstaff.route');

//router.use('/auth/', auth);

router.use('/doctor',DoctorRouter);
router.use('/nurse/',NurseRouter);
router.use('/assign/',AssignRouter);
router.use('/mlt/',MLTRouter);
router.use('/pharmacist/',PharmacistRouter);
router.use('/generalstaff/',GeneralStaffRouter);

module.exports = router;