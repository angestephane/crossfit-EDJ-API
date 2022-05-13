const Member = require('../databases/member')

const getAllMembers = () => {
    try{
        members = Member.getAllMembers();
        return members;
    }catch (e) {
        throw e;
    }
}

module.exports = {getAllMembers}