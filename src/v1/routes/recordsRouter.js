const express = require('express');
const RecordController = require('../../controllers/recordController')

const router = express.Router();

//Endpoint retournant tous les records
router.get('/',  RecordController.getAllRecords);
router.get('/:recordId', RecordController.getRecord)

module.exports = router;