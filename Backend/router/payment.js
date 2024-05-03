const express =require('express');
const router = express.Router();

const paymentController = require('../Controller/paymentController')
router.post('/',paymentController.paymenthandler);


module.exports =router;

