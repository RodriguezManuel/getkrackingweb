import { Api } from './api.js';


const string_type= [ 'Biceps', 'Triceps', 'Pecho', 'Espalda', 'Abdominales', 'Piernas', 'Todos' ];


let tipos= {};
tipos[string_type[0]] = 2;
tipos[string_type[1]] = 3;
tipos[string_type[2]] = 4;
tipos[string_type[3]] = 5;
tipos[string_type[4]] = 6;
tipos[string_type[5]] = 7;
tipos[string_type[6]] = 1;



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
    //getters
    static async getFromDefaultRutine( type ,controller) {
        return await Api.get(Api.baseUrl + '/routines/' + tipos[type] + '/cycles/' + tipos[type] +'/exercises?page=0&size=99&orderBy=id&direction=asc', true, controller);
    }
    static async getByType( type , controller ){
        console.log("getting routine type:" + type);
        if ( !string_type.includes(type)){
            return []
        }
        console.log("with the id: " + tipos[type]);
        const result = await ExercisesApi.getFromDefaultRutine(type , controller);
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

    static async getExercises( controller) {
        return this.getByType('Todos' , controller);
    }
    //Posters
    static async addExercise(data, id , cycle_id , controller){
        console.log("Adding to rutine id: " + id);
        console.log("Addint to cycle_id: " + cycle_id);
        const path = Api.baseUrl + '/routines/' + id + '/cycles/' + cycle_id + '/exercises';
        const send = {
            'name': data.name,
            'detail': data.detail,
            'type':'exercise',
            'duration': 0,
            'repetitions': 50,
        }
        return await Api.post( path , true , send , controller);
    }
    static async postMasterExercise( data , controller){
        if ( !string_type.includes(data.type)){
            return [];
        }
        let routineId = tipos[data.type];
        if( routineId !== 1) {
            let result = await this.addExercise(data ,routineId , routineId ,controller);
            if (result.code) {
                return result;
            }
        }
        return this.addExercise( data , 1 , 1 ,controller);
    }
    //Editers
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
    //Deleters
    static async deleteExercise( routineId , cycleId , exerciseId, controller){
        const path =  Api.baseUrl + '/routines/' + routineId + '/cycle/' + cycleId + '/exercises/' + exerciseId;
        return Api.delete(path , true , controller);
    }
    static async deleteMasterExercise( id , type , controller){
        if ( !string_type.includes(type)){
            return []
        }
        const result = this.deleteExercise( tipos[type] , tipos[type] , id , controller );
        if ( result.code ){
            return result;
        }
        return this.deleteExercise( 1 , 1 , id , controller);
    }
}


export { ExercisesApi};

