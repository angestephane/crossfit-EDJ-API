const DB = require('./db.json');
const {saveToDataBase} = require('./utils')

const getAllRecord = () => {
    return DB.records;
}

const getRecord = (recordId) => {
    try{
        const record = DB.records.find((record) => record.id === recordId);
        if(!record){
            throw {
                status: 400,
                message : `Impossible de recupérer la référence "${recordId}"`
            }
        }
        return record;
    }catch (e) {
        throw {
            status : 500,
            error : error?.message || error
        }
    }
}

const createRecord = (newRecord) => {

    try{
        DB.records.push(newRecord);
        saveToDataBase(DB);
        return newRecord;
    }catch (e) {
        throw {status : 500, message: e?.message || e }
    }

}

module.exports = {getAllRecord, getRecord, createRecord}