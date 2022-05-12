const express = require('express');
const RecordController = require('../../controllers/recordController')

const router = express.Router();

//Endpoint retournant tous les records
router.get('/',  RecordController.getAllRecords);

//Endpoint retournant un record spécifique
router.get('/:recordId', RecordController.getRecord)

//Endpoint pour ajouter un nouveau record
router.post('/', RecordController.createRecord);

//Endpoint pour modifier un record
router.patch('/:recordId', RecordController.updateRecord);

//Endpoint pour supprimer un record
router.delete('/:recordId', RecordController.deleteRecord);

module.exports = router;