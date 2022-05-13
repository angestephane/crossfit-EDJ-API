const DB = require('./db.json');

const getAllMembers = () => {
    try {
        return DB.members
    }catch(e){
        throw e;
    }
}

module.exports = {getAllMembers}