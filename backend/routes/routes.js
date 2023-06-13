const express = require('express');

const router = express.Router();

const appController = require('../controllers/controller');

router.get('/getProducts',appController.getDetails);

router.post('/AddProducts',appController.sendProducts);

router.post('/deleteProducts/:pId',appController.deleteProducts);


module.exports = router;

