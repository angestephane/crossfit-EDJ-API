const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// document réalisé via : https://swagger.io/specification/#infoObject
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Crossfit EDJ API",
            version: "1.0.0",
            description: "cette api fournit des données sur des entrainements, " +
                "Les clients du club " +
                "Et les records des clients par rapport à un entrainement ",
            contact: {
                name: "ange stephane",
                email: "boguhestephane97@gmail.com",
            },
            license: {
                name: "libre",
            },
        },
    },
    apis: [
        "./src/v1/routes/memberRouter.js",
        "./src/v1/routes/workoutRouter.js",
        "./src/v1/routes/recordsRouter.js",
        "./src/databases/workout.js",
        "./src/databases/record.js",
        "./src/databases/member.js"],
};

// documentation en format json
const swaggerSpec = swaggerJSDoc(options);

// Fonction pour parametter  notre documentation
const swaggerDocs = (app, port) => {
    // Route pour la documentation
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // rendre la documentation disponible en format json
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Version 1 de la documentation : http://localhost:${port}/api/v1/docs`
    );
};

module.exports = {swaggerDocs};
