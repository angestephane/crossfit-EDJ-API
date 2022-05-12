const express = require('express');
const RecordController = require('../../controllers/recordController')

const router = express.Router();

//Endpoint retournant tous les records
router.get('/',  RecordController.getAllRecords);

//Endpoint retournant un record spécifique
router.get('/:recordId', RecordController.getRecord)

//Endpoint pour ajouter un nouveau record
router.post('/', RecordController.createRecord);

module.exports = router;