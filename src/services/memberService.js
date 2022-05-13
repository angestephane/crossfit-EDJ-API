const Member = require('../databases/member')

const getAllMembers = () => {
    try{
        members = Member.getAllMembers();
        return members;
    }catch (e) {
        throw e;
    }
}

const getMember = (memberId) => {
    try{
        return member = Member.getMember(memberId);
    }catch (e) {
        throw e;
    }
}

module.exports = {getAllMembers, getMember}