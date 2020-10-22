import { Api } from './api.js';
class Exercise{
    constructor(name , detail , id) {
        this.name = name;
        this.id = id;
        this.detail = detail;
    }
}
class ExercisesApi {
    static get url() {
        return Api.baseUrl;
    }

    static async getAll(controller) {
        const result = await Api.get(Api.baseUrl + '/routines/1/cycles/1/exercises?page=0&size=99&orderBy=id&direction=asc', true, controller);
        return result;
    }

    static async getExercises() {
        const result = await ExercisesApi.getAll(null);
        if (result.code) {
            console.log("ERROR");
        } else {
            let vector = [];
            let aux;
            for (let i = 0; i < result.results.length; i++) {
                aux = new Exercise(result.results[i].name , result.results[i].detail , result.results[i].id);
                vector.push(aux);
            }
            return vector;
        }
    }
    static async postMasterExercise( data , controller){
        const send = {
            'name': data.name,
            'detail': data.detail,
            'type': "exercise",
            'duration': 0,
            'repetitions': 50
        };
        return await Api.post( Api.baseUrl+ '/routines/1/cycles/1/exercises', true , send , controller)
    }

    static async editMasterExercise( data , controller){
        const path = Api.baseUrl + '/routines/1/cycles/1/exercises/' + data.id;
        const send = {
            'name': data.name,
            'detail': data.detail,
            'type': "exercise",
            'duration': 0,
            'repetitions': 50
        };
        return await Api.put( path , true , send , controller);
    }
    static async deleteMasterExercise( id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/1/exercises/' + id;
        return  await Api.delete( path , true, controller);

    }
}


export { ExercisesApi};

