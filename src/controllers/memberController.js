const MemberService = require('../services/memberService')

const getAllMembers = (req, res) => {
    try{
        const members = MemberService.getAllMembers()
        res.status(200).send({status: 'OK', data: members});
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status: 'FAILED', data : {e : e?.message || e}})
    }
}

const getMember = (req, res) => {
    const {
        params : {memberId}
    } = req

    if(!memberId){
        res
            .status(400)
            .data({status: 'FAILED',data: {
                error : "Référence incorect !"
                }})
    }
    try {
        const member = MemberService.getMember(memberId);
        res.status(200).send({status :'OK', data: member});
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status:'FAILED',data: {erreur : e?.message || e}})
    }
}

const addMember = (req, res) => {
    const {body} = req
    if(
        !body.name ||
        !body.gender ||
        !body.dateOfBirth ||
        !body.email ||
        !body.password){
        res
            .status(400)
            .send({status:'FAILED',data: {erreur : "Donnée imcomplet. Veuillez saisir tous les champs"}})
    }

    const newMember = {
        name : body.name,
        gender : body.gender,
        birthDay : body.dateOfBirth,
        email : body.email,
        password : body.password
    }

    try{
        const memberToAdd = MemberService.addMember(newMember)
        res.status(200).send({status:'OK', data : memberToAdd})
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status:'FAILED',data: {erreur :e?.message || e}})
    }
}

const updateMember = (req, res) => {
    const {
        body,
        params : {memberId}
    } = req

    if(!memberId){
        res
            .status(400)
            .send({status:'FAILED',data: {erreur :"Impossible de trouver la référence saisi"}})
    }

    try{
        const memberToUpdate = MemberService.updateMember(memberId, body)
        res.status(200).send({status:'OK', data : memberToUpdate})
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status:'FAILED',data: {erre : e?.message || e}})
    }
}

module.exports = {getAllMembers, getMember, addMember, updateMember}