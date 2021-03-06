const express = require('express');
const bodyParser = require('body-parser');

const v1WorkOutRouter = require('./v1/routes/workoutRouter')
const v1RecordsRouter = require('./v1/routes/recordsRouter');
const v1MembersRouter = require('./v1/routes/memberRouter');

const dbConnexion = require('./databases/connexion')

//Swagger documentation
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

//Connexion à la base de données
dbConnexion();

// Création de notre application
const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(bodyParser.json());// Analyse les données au format json

/** Recuperation de toutes les requêtes
 passant par /api/v1/workout avec v1WorkOutRouter */
app.use("/api/v1/workout", v1WorkOutRouter);
app.use("/api/v1/record", v1RecordsRouter);
app.use("/api/v1/member", v1MembersRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port : ${PORT}`);
    V1SwaggerDocs(app, PORT)
})
