const DB = require('./db.json');
const {saveToDataBase} = require("./utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     member:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 12a410bc-849f-4e7e-bfc8-4ef283ee4b19
 *         name:
 *           type: string
 *           example: Jason Miller
 *         gender:
 *           type: string
 *           example: male
 *         dateOfBirth:
 *           type: string
 *           example: 23/04/1990
 *         email:
 *           type: string
 *           example: jason@mail.com
 *         password:
 *           type: string
 *           example: 666349420ec497c1dc890c45179d44fb13220239325172af02d1fb6635922956,
 *
 */

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

const updateMember = (memberId, fieldToUpdate) => {
    const indexAsFound = DB.members.findIndex((member) => member.id === memberId);
    if(indexAsFound === -1){
        throw {
            status : 400,
            message : `Impossible de trouver la référence saisi : "${memberId}" `
        }
    }
    try {
        const MemberToUpdate = {
            ...DB.members[indexAsFound],
            ...fieldToUpdate,
        };
        DB.members[indexAsFound] = MemberToUpdate;
        saveToDataBase(DB);
        return MemberToUpdate;
    }catch (e) {
        throw {status : 500, message: e?.message || e }
    }
}

const deleteMember = (memberId) => {
    const memberIndex = DB.members.findIndex((member) => member.id === memberId)

    if(memberIndex === -1){
        throw {
            status : 400,
            message : `Référence "${memberId}" introuvabale`
        }

    }
    try{
        DB.members.splice(memberIndex, 1);
        saveToDataBase(DB)
    }catch (e) {
        throw {
            status : e?.message || 500,
            message : e?.message || e
        }

    }
}

module.exports = {getAllMembers, getMember, addMember, updateMember, deleteMember}
