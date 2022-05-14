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

const getAllWorkouts = (paramsFilter) => {
    try{
        return allWorkouts = Workout.getAllWorkouts(paramsFilter)
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

const addWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id : uuid(),
    }
    try {
        return createdWorkout = Workout.addWorkouts(workoutToInsert);
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