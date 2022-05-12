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

const getAllWorkouts = () => {
    try{
        const allWorkouts = Workout.getAllWorkouts()
        return allWorkouts;
    } catch (e) {
        throw e;
    }

}

const getWorkout = (workoutId) => {
    try{
        const workout = Workout.getWorkout(workoutId);
        return workout;
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
        const createdWorkout = Workout.addWorkouts(workoutToInsert);
        return createdWorkout;
    }catch(err) {
        throw err
    }
}

const updateWorkout = (workoutId, changes) => {
    try {
        const updateWorkout = Workout.updateWorkout(workoutId, changes);
        return updateWorkout;
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