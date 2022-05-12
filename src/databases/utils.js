const fs = require('fs');

const saveToDataBase = (DB) => {
    try {
        fs.writeFileSync("./src/databases/db.json", JSON.stringify(DB, null, 2), {
            utf8: true,
        })
    } catch (err) {
        console.error("Erreur d'ajout : ", err);
    }
}

module.exports = { saveToDataBase }
