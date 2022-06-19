const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('connexion à la base de données reussie')
    }catch(e){
        console.log('erreur de connexion à la base de données', e);
        throw new Error(e);
    }

}

