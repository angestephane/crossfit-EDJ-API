const DB = require('./db.json');
const {saveToDataBase} = require('./utils')

const ServiceMembers = require('../services/memberService');

/**
 * @openapi
 * components:
 *   schemas:
 *     record:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: ad75d475-ac57-44f4-a02a-8f6def58ff56
 *         workout:
 *           type: string
 *           example: "4a3d9aaa-608c-49a7-a004-66305ad4ab50"
 *         record:
 *           type: string
 *           example: 7:23 minutes
 *         memberId:
 *           type: string
 *           example: 11817fb1-03a1-4b4a-8d27-854ac893cf41
 *         member:
 *           type: string
 *           example: /member/:memberId
 *
 */

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
            error : e?.message || e
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
    if(recordUpdateIndex === -1){
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
    if(getIndexRecord === -1){
        throw {
            status : 400,
            message : `Impossible de trouver la référence ${recordId}`
        }
    }
    try {
        DB.records.splice(getIndexRecord, 1)
        saveToDataBase(DB);
    } catch (e) {
        throw {
            status : e?.status || 500,
            message : e?.message || e
        }

    }
}

const getWorkoutRecord = (workoutId) => {
    try{
        const records = DB.records.filter((record) => record.workout === workoutId);
        if(!records){
            throw {
                status : 400,
                message : `Impossible de trouver : "${record}"`
            }
    }
        const newRecords = []

        records.forEach(e=>{
            const member = {
                name : ServiceMembers.getMember(e.memberId).name,
                gender : ServiceMembers.getMember(e.memberId).gender,
                dateOfBirth : ServiceMembers.getMember(e.memberId).dateOfBirth,
                email : ServiceMembers.getMember(e.memberId).email

            }
           newRecords.push({
               ... e,
               member : member
           })

       })

        return newRecords;

    }catch(e){
        throw {
            status : e?.status || 500,
            message : e.message || e
        }
    }

}

module.exports = {getAllRecord, getRecord, createRecord, updateRecord, deleteRecord, getWorkoutRecord}
