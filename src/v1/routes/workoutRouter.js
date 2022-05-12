const express = require('express');
const WorkoutController = require('../../controllers/workoutController');

const router = express.Router();


//Endpoint retournant tous les entrainenements
router.get("/", WorkoutController.getAllWorkouts);

//Endpoint retournant un entrainenement spécifique
router.get("/:workoutId", WorkoutController.getWorkout);

//Endpoint permettant d'ajouter un nouvel entrainenemnet
router.post("/", WorkoutController.addWorkout)

//Endpoint permettant de modifier un entrainenemnet
router.patch("/:workoutId", WorkoutController.updateWorkout)

//Endpoint permettant de supprimer un entrainement
router.delete("/:workoutId", WorkoutController.deleteWorkout)

module.exports = router;