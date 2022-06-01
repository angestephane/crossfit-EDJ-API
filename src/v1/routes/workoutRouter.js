const express = require('express');
const WorkoutController = require('../../controllers/workoutController');
const RecordController = require('../../controllers/recordController');


const apicache = require('apicache')

const router = express.Router();

cache = apicache.middleware

/**
 * @openapi
 * /api/v1/workout:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         description: recherche en fonction du mode d'entrainement
 *       - in: query
 *         name: equipement
 *         description: recherche dans le tableau d'équipement
 *       - in: query
 *         name: length
 *         description: taille du nombre d'élements qui seront retourné
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/workout"
 *
 */
//Endpoint retournant tous les entrainement
router.get("/", cache('2 minutes'), WorkoutController.getAllWorkouts);

//Endpoint retournant un entrainement spécifique
router.get("/:workoutId", WorkoutController.getWorkout);

//Enpoint pour retrouver tous les record dans un entrainement
router.get('/:workoutId/records', RecordController.getWorkoutRecord)

/**
 * @openapi
 * /api/v1/workout:
 *   post:
 *     tags:
 *       - Workouts
 *     summary: utiliser pour ajouter un nouvel entrainement
 *     description: Cette methode permet d'ajouter un nouvel entrainement
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                 $ref: '#/components/schemas/workoutdto'
 *     responses:
 *       200:
 *         description: entrainement crée avec succès !
 *
 */

//Endpoint permettant d'ajouter un nouvel entrainenemnet
router.post("/",  WorkoutController.addWorkout)

//Endpoint permettant de modifier un entrainenemnet
router.patch("/:workoutId", WorkoutController.updateWorkout)

//Endpoint permettant de supprimer un entrainement
router.delete("/:workoutId", WorkoutController.deleteWorkout)

module.exports = router;
