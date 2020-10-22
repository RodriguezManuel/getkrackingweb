import { Api } from './api.js';
class Exercise{
    constructor(name) {
        this.name = name;
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
                aux = new Exercise(result.results[i].name);
                vector.push(aux);
            }
            return vector;
        }
    }
}


export { ExercisesApi};

