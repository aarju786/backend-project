const express = require('express');
const router = express.Router();
const { createuser } = require('../Controller/Usercontroller');

router.post('/createuser', createuser);

module.exports = router;