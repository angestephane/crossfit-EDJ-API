const DB = require('./db.json');
const {saveToDataBase} = require("./utils");

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

const addMember = (newMember) => {

    const existe =
        DB.members.findIndex((member) => member.email === newMember.email) > -1;
    if(existe) {
        throw {
            status : 400,
            message : `l'entrainement avec le nom '${newMember.name}' exite déjà`

        };
    }
    try{
        DB.members.push( newMember );
        saveToDataBase(DB);
        return newMember;
    }catch(error){
        throw {status : 500, message: error?.message || error }
    }

}

module.exports = {getAllMembers, getMember, addMember}