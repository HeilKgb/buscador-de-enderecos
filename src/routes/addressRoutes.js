const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.post('/', addressController.createAddress);
router.post('/from-cep', addressController.saveAddressFromCEP);
router.get('/:id', addressController.getAddressById);
router.post('/save', addressController.saveAddressFromIBGE);
router.get('/', addressController.getAllAddresses);
router.delete('/:id', addressController.deleteAddressById);

module.exports = router;
