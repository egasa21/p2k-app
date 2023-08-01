const express = require('express');
const { registerUser, login } = require('../controllers/authController');
const { getAllData, getDataByNim, addData } = require('../controllers/dataController');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

router.get('/', getAllData);
router.get('/:nim', getDataByNim);
router.post('/', requireAuth, addData);

module.exports = router;
