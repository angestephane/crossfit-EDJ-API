const DB = require('./db.json');

const { saveToDataBase } = require('./utils');

//Retourne toutes les données de la base de données.
const getAllWorkouts = () => {
    return DB.workouts;
}

const addWorkouts = (newWorkout) => {
    /**
     * *findIndex returne -1 si la condition n'est pas verifiée voir la doc 👇🏾
     * *!https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     * *Dans notre cas si l'élément existe la condition sera fausse. Donc on aura -1
     * *sinon une valeur supérieur qui est l'indexe de l'élément...
     *
     * ************************************************************************************************
     *
     * TODO : Si l'élément existe on sort de la méthode et il y aura uncun
     * TODO : enregistrement, sinon l'élément sera ajouté.
     * **/

    const existe =
        DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(existe) {
        throw {
            status : 400,
            message : `l'entrainement avec le nom '${newWorkout.name}' exite déjà`

        };
    }
    try{
        DB.workouts.push( newWorkout );
        saveToDataBase(DB);
        return newWorkout;
    }catch(error){
        throw {status : 500, message: error?.message || error }
    }

}

const getWorkout = (workoutId) => {

    try{
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if(!workout){
            throw {
                status : 400,
                message : "Il existe une erreur sur la référence de l'entrainement : "
                +`${workoutId} incorrecte`
            };
        }
        return workout;
    }catch(error){
        throw {status : 500, message: error?.message || error }
    }
}

const updateWorkout = (workoutId, changes) => {
    const indexForUpdate =
        DB.workouts.findIndex((workout) => workout.id === workoutId);
    if(indexForUpdate === -1 ){
        throw {
            status : 400,
            message : "Il existe une erreur sur la référence de l'entrainement : "
                +`${workoutId} incorrecte`
        }
    }
    try {
        const workoutUpdated = {
            ...DB.workouts[indexForUpdate],
            ...changes,
            updatedAt : new Date().toLocaleString("fr-FR", {timeZone : "UTC"})
        };
        DB.workouts[indexForUpdate] = workoutUpdated;
        saveToDataBase(DB);
        return workoutUpdated;
    }catch (e) {
        throw {status : 500, message: e?.message || e }
    }

}

const deleteWorkout = (workoutId) => {
    try{
        const workoutIndex =
            DB.workouts.findIndex((workout) => workout.id === workoutId);
        if(workoutIndex === -1){
            throw {
                status : 400,
                message : `impossible de trouver l'entrainement avec la référence : ${workoutId}`
            }
        }
        DB.workouts.splice(workoutIndex, 1);
        saveToDataBase(DB);
    }catch (e) {
        throw {status : e?.status || 500, message: e?.message || e }
    }

}

module.exports = { getAllWorkouts, addWorkouts, getWorkout, deleteWorkout, updateWorkout }