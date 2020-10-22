import { Api } from './api.js';

class Exercise {
    constructor(name) {
        this.name = name;
    }
}
class ExercisesApi {
    static get url() {
        return  Api.baseUrl;
    }

    static async getAll(  controller ){
        const result = await Api.get('http://localhost:6900/api/routines/1/cycles/1/exercises?page=0&size=99&orderBy=id&direction=asc' , true , controller);
        return result;
    }

}


export { ExercisesApi, Exercise };

