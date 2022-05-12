const Record = require('../databases/record')
const {v4 : uuid} = require('uuid');

const getAllRecords = () => {
    try {
        return Record.getAllRecord();
    }catch (err){
        throw err
    }
}

const getRecord = (recordId) => {
    try{
        const record = Record.getRecord(recordId);
        return record
    }catch (e) {
        throw e;
    }
}

const createRecord = (record) => {
    const newRecord = {
        ...record,
        id : uuid()
    }

    try{
        const record = Record.createRecord(newRecord);
        return record;
        }catch (err){
        throw err
    }
}

module.exports = {getAllRecords, getRecord, createRecord}