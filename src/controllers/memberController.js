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

module.exports = {getAllMembers, getMember}