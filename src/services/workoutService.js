/**
 * Ici Nous définissons toutes les méthodes
 * du services
 * ****************************************
 * C'est aussi une bonne pratique de nommer
 * le nom des méthode dans le service
 * identquement à celui des méthodes dans le
 * controller **/

const { v4:uuid } = require('uuid')

const Workout = require('../databases/workout')

const getAllWorkouts = (mode, equipement, length) => {
    try {
        return Workout.getAllWorkouts(mode, equipement, length)
    } catch (e) {
        throw e;
    }

}

const getWorkout = (workoutId) => {
    try{
        return workout = Workout.getWorkout(workoutId);
    } catch (e) {
        throw e;
    }

}

const addWorkout = async (newWorkout) => {
    try {
        return await Workout.addWorkouts(newWorkout);
    }catch(err) {
        throw err
    }
}

const updateWorkout = (workoutId, changes) => {
    try {
        return workoutToUpdated = Workout.updateWorkout(workoutId, changes);
        //
    }catch (e) {
        throw e;
    }

}

const deleteWorkout = (workoutId) => {
    try {
        Workout.deleteWorkout(workoutId);
    }catch (e) {
        throw e;
    }

}

module.exports = {
    getAllWorkouts,
    getWorkout,
    addWorkout,
    updateWorkout,
    deleteWorkout
}
