const Record = require('../databases/record')

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

module.exports = {getAllRecords, getRecord}