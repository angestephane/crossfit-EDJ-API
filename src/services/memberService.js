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
    const password = bcrypt.hashSync(member.password, 10)
    const newMember = {
        ...member,
        id : uuid(),
        password : password
    }

    try{
        const memberToAdd = Member.addMember(newMember);
        return memberToAdd;
    }catch (e) {
        throw e;
    }
}

const updateMember = (memberId, fieldToUpdate) => {
    try{
        return Member.updateMember(memberId, fieldToUpdate);
    }
    catch (e) {
        throw e;
    }
}

module.exports = {getAllMembers, getMember, addMember, updateMember}