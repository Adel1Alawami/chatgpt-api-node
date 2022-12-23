const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { generateasnwer } = require('../controllers/openaiController');
const router = express.Router();


router.post('/generateanswer' , generateasnwer);



module.exports = router;