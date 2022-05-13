const DB = require('./db.json');

const getAllMembers = () => {
    try {
        return DB.members
    }catch(e){
        throw e;
    }
}

const getMember = (memberId) => {
    try {
    const member = DB.members.find((member) => member.id === memberId)
    if(!member){
        throw {
            status: 400,
            message : `impossible de trouver la référence "${memberId}"`
        }
    }
     return member
    }catch (e) {
        throw {
            status: e?.status || 500,
            message : e?.message || e
        }
    }
}

module.exports = {getAllMembers, getMember}