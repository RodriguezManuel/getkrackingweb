import { Api } from './api.js';
const string_level =[ 'rookie', 'beginner', 'intermediate', 'advanced', 'expert' ];
let level = {};
level[string_level[0]]=1;
level[string_level[1]]=2;
level[string_level[2]]=3;
level[string_level[3]]=4;
level[string_level[4]]=5;

class Routine{
    constructor(name , detail , level , fav ,id) {
        this.name = name;
        this.detail = detail;
        this.level=level;
        this.fav = fav;
        this.id = id;
    }
}
class RoutineApi {
    static get url() {
        return Api.baseUrl + '/routines';
    }

    static isFav( routineid  , favs ){
        for ( let i = 0 ; i < favs.length; i++){
            if ( routineid === favs[i].id){
                return true;
            }
        }
        return false;
    }
    static async getAllRoutines( controller){
            let routines = await Api.get(this.url, true, controller);
        let count = routines.totalCount
        routines = routines.results;
            let vector = [];
            for (let i = 0 ; i < count; i++ ) {
                vector.push(new Routine( routines[i].name , routines[i].detail , level[routines[i].difficulty], false , routines[i].id));
            }
            console.log(vector);
            return vector;
    }
    static async getRoutines(controller) {
        const self = await Api.get(Api.baseUrl + '/user/current', true, controller);
        if (self.code) {
            console.log("ERROR");
            return self;
        }
        const id = self.id;
        console.log("my id is:" + id);
        let favourites = await Api.get(Api.baseUrl + '/user/current/routines/favourites' , true , null);
        favourites = favourites.results
        let routines = await Api.get(this.url+ '?page=0&size=99&orderBy=dateCreated&direction=asc', true, controller);
        routines = routines.results;
        let vector = [];
        let fav_flag;
        for (let i = 0 ; i < routines.length; i++ ) {
            console.log('vuelta: ' + (i+1)  );
            if (routines[i].creator.id === id && routines[i].id !== 1) {
                fav_flag = this.isFav((routines[i].id), favourites);


                vector.push(new Routine(routines[i].name, routines[i].detail, level[routines[i].difficulty], fav_flag, routines[i].id));
            }
        }
        console.log(vector);
        return vector;
    }

    static async deleteFav( id , controller){
        return await Api.delete(Api.baseUrl+'/user/current/routines/'+ id +'/favourites' , true , controller);
    }

    static async addFav( id , controller){
        return await Api.post(Api.baseUrl+'/user/current/routines/'+ id +'/favourites' , true , controller);
    }
    static async deleteRoutine( id , controller){
        return await Api.delete( this.url + '/' + id  , true , controller);
    }
    static async newRoutine( name , detail , dif , controller){
        const data = {
            "name": name,
            "detail": detail,
            "isPublic": true,
            "difficulty": string_level[dif - 1],
            "category": {
                "id": 1
            }
        };
        console.log("creando una nueva rutina:" + data.detail + ' name: ' +data.name + 'dif :' +data.difficulty );
        const result = await Api.post( this.url , true , data , controller);
        console.log(result.id);
        return result.id
    }
    static async addCycle( type , number , reps , id , controller){
        const cycleData= {
            "name": type,
            "detail": type,
            "type": type,
            "order": number,
            "repetitions": reps
        };
       const result = await Api.post( this.url + '/' + id + '/cycles' , true , cycleData , controller);
        if(result.code){
            console.log(result.detail);
        }
       return result.id;
    }
    static async buildMaster(){
        await Api.delete(this.url+'/1' , true , null);
        const routines = await this.getRoutines( null);
        for ( let i = 0 ; i < routines.length ; i++){
            console.log("deleting routine:" + routines[i].id );
            await Api.delete(this.url + '/' + routines[i].id , true , null);
        }
        const categoryData = {
            "name": "Master",
            "detail": "Master"
        };
        const cycleData= {
            "name": "Master",
            "detail": "Master",
            "type": "warmup",
            "order": 2,
            "repetitions": 1
        };
        const data = {
            "name": "Master",
            "detail": "Master",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                        "id": 1
                         }
        };
        const data1 = {
            "name": "Biceps",
            "detail": "Biceps",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                "id": 1
            }
        };

        const data2 = {
            "name": "Triceps",
            "detail": "Triceps",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                "id": 1
            }
        };

        const data3 = {
            "name": "Pecho",
            "detail": "Pecho",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                "id": 1
            }
        };

        const data4 = {
            "name": "Espalda",
            "detail": "Espalda",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                "id": 1
            }
        };

        const data5 = {
            "name": "Abdominales",
            "detail": "Abdominales",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                "id": 1
            }
        };

        const data6 = {
            "name": "piernas",
            "detail": "piernas",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                "id": 1
            }
        };
        const vec = [];
        vec.push(data);
        vec.push(data1);
        vec.push(data2);
        vec.push(data3);
        vec.push(data4);
        vec.push(data5);
        vec.push(data6);
        console.log("new category");
        await Api.post(Api.baseUrl+'/categories' , true , categoryData , null);
        for( let i = 0 ; i < vec.length ; i++){
            console.log("new routine");
            await Api.post( this.url , true , vec[i] , null);
            console.log("new cycle");
            await Api.post( this.url + '/' + (i+1) + '/cycles' , true , cycleData , null);
        }


    }

}

export {RoutineApi};