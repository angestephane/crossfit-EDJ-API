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

const updateRecord = (recordId, newRecord) => {
    const recordUpdateIndex = DB.records.findIndex((record) => record.id === recordId)
    if(recordUpdateIndex == -1){
        throw {
            status : 400,
            message : `Impossible de trouver la référence "${recordId}"`
        }
    }
    const record = {
        ...DB.records[recordUpdateIndex],
        ...newRecord,
    }
    try{
        DB.records[recordUpdateIndex] = record
        saveToDataBase(DB);
        return record;
    }catch (e) {
        throw {
            status : e?.status || 500,
            message: e?.message || e
        }
    }
}

const deleteRecord = (recordId) => {
    const getIndexRecord = DB.records.findIndex((record) => record.id === recordId)
    if(!getIndexRecord){
        throw {
            status : 400,
            message : `Impossible de trouver la référence ${recordId}`
        }
    }
    try {
        DB.records.splice(getIndexRecord, 0)
    } catch (e) {
        throw {
            status : e?.status || 500,
            message : e?.message || e
        }

    }
}

module.exports = {getAllRecord, getRecord, createRecord, updateRecord, deleteRecord}