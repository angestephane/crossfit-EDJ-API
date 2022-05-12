const DB = require('./db.json');

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

module.exports = {getAllRecord, getRecord}