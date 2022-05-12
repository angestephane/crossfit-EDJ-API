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

const createRecord = (req, res) => {
    const {body} = req

    if(!body.workout || !body.record){
        res
            .status(400)
            .send({data : {
                error:"Certain champs n'ont pas été rensigné !"
                }})
    }
    const newRecord = {
        workout : body.workout,
        record : body.record
    }
    try{
        const record = ServiceRecord.createRecord(newRecord);
        res.status(201).send({status : 'OK', data : record});
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status : 'FAILED', data : {e : e?.message || e}})
    }
}

const updateRecord = (req, res) => {

    const {
        body,
        params : {recordId}
    } = req;

    if(!recordId){
      res
          .status(400)
          .send({
              status : 'FAILED',
              data : {
                  error : 'Référence introuvable'
              }
          })
    }
    try{
        const recordUpdate = ServiceRecord.updateRecord(recordId, body);
        res.status(200).send({status : 'OK', data : recordUpdate});
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status : 'FAILED', e : e?.message || e})
    }
}

const deleteRecord = (req, res) => {
    const {
        body,
        params : {recordId}
    } = req;

    if(!recordId){
        res
            .status(400)
            .send({
                status : 'FAILED',
                data : {
                    error : "Référence introuvable. Vérifiez la référence !"
                }
            })
    }
    try {
        ServiceRecord.deleteRecord(recordId, body)
        res.status(200).send({status : 'OK', data : body})
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({
                status : 'FAILED',
                data : {e : e?.message || e}
            })
    }
}

module.exports = {getAllRecords, getRecord, createRecord, updateRecord, deleteRecord}