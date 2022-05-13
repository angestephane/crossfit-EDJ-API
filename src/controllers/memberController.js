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

module.exports = {getAllMembers}