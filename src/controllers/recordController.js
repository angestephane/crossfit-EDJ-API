const ServiceRecord = require('../services/recordService')

const getAllRecords = (req, res) => {
    const allRecords = ServiceRecord.getAllRecords();
    res.send({
        status: 200,
        data : allRecords
    })
}

const getRecord = (req, res) => {
    const {
        params: {recordId},
    } = req;

    if(!recordId){
        res
            .status(400)
            .send({
                status : 'FAILED',
                data : {
                    error : 'Impossible de trouver la référence'
                }
            })
    }
    try{
        const record = ServiceRecord.getRecord(recordId);
        res.send({status: 200, data : record})
    }catch(e){
        res
            .status(e?.status || 500)
            .send({e : e?.message || e})
    }

}

module.exports = {getAllRecords, getRecord}