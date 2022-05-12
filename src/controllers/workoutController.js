const ServiceWorkout = require('../services/workoutService')

// Méthode retournant tous les entrainements
const getAllWorkouts = (req, res) => {
    const allWorkouts = ServiceWorkout.getAllWorkouts();
    res.send({
        status: 'ok',
        data: allWorkouts
    });
}

// Méthode retournant un entrainement spécifique
const getWorkout = (req, res) => {
    const {
        params : { workoutId }
    } = req;

    if(!workoutId){
        res.status(400).send({
            status: '400 FAILED',
            data : {
                error :
                "Le server rencontre une erreur sur la référence ':workoutId'. Vérifiez la référence"
            }
        });
    }
    try{
        const workout = ServiceWorkout.getWorkout(workoutId);
        res.send({status: 'ok', data: workout});
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status: 'FAILED', data : {e : e?.message || e}});
    }

}

// Méthode ajoutant un entrainemnt
const addWorkout = (req, res) => {
    const {body} = req;
    if( !body.name
        || !body.mode
        || !body.equipement
        || !body.exercises
        || !body.astuces){
        res.status(400).send({
            status : '400 FAILED',
            data : {
                error :
                "L'un des champs n'a pas été renseigné. Verifiez le " +
                    "'name', " +
                    "'mode', " +
                    "'equipement', " +
                    "'exercises', " +
                    "'status'"
            }
        })
    }
    const newWorkout = {
        name : body.name,
        mode : body.mode,
        equipement : body.equipement,
        exercises : body.exercises,
        astuces : body.astuces,
    }
    try {
        const addWorkout = ServiceWorkout.addWorkout(newWorkout);
        res.status(201).send({status : '0K', data : addWorkout})
    }catch(e) {
        res
            .status(e?.status || 500)
            .send({status : 'FAILED', data : {e : e?.message || e}})
    }

}

// Méthode modifiant un entrainement spécifique
const updateWorkout = (req, res) => {
    const {
        body,
        params : { workoutId }
    } = req;
    if(!workoutId){
        res
            .status(400)
            .send({
            status : 'FAILED',
            data : { error : "Le server rencontre une erreur sur la référence ':workoutId'. Vérifiez la référence"}
        })
    }

    try{
        const updateWorkout = ServiceWorkout.updateWorkout(workoutId, body);
        res.send({status : 'OK', data : updateWorkout});
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status : 'FAILED', data : {e : e?.message || e}})
    }

}

// Méthode supprimant un entrainement spécifique
const deleteWorkout = (req, res) => {
    const {
        body,
        params : { workoutId }
    } = req;
    if(!workoutId){
        res
            .status(400)
            .send({
            status : 'FAILED',
            data : { error : "Le server rencontre une erreur sur la référence ':workoutId'. Vérifiez la référence"}
        })
    }
    try {
        ServiceWorkout.deleteWorkout(workoutId, body);
        res.status(200).send({status : "OK", data : {message : "workout supprimé avec succès !"}})
    }catch (e) {
        res
            .status(e?.status || 500)
            .send({status : 'FAILED', data : {e : e?.message || e}})
    }

}

module.exports = {
    getAllWorkouts,
    getWorkout,
    addWorkout,
    updateWorkout,
    deleteWorkout
};