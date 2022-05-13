const Member = require('../databases/member')
const {v4 : uuid} = require('uuid');
const bcrypt = require('bcrypt')

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

const addMember = (member) => {

    const newMember = {
        ...member,
        id : uuid(),
        password : bcrypt.hashSync(member.password, 10)
    }

    try{
        const memberToAdd = Member.addMember(newMember);
        return memberToAdd;
    }catch (e) {
        throw e;
    }
}

module.exports = {getAllMembers, getMember, addMember}