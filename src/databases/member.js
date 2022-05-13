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
        sendErrorCode("Membre introuvable")
    }
     return member
    }catch (e) {
        sendErrorCode(e);
    }
}

module.exports = {getAllMembers, getMember}