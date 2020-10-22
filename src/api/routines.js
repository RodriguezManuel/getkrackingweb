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
        let routines = await Api.get(this.url, true, controller);
        routines = routines.results;
        let vector = [];
        let fav_flag;
        for (let i = 0; i < routines.length; i++) {
            if (routines[i].creator.id === id && routines[i].id !== 1) {
                fav_flag = this.isFav((routines[i].id) , favourites);
                vector.push(new Routine( routines[i].name , routines[i].detail , level[routines[i].difficulty], fav_flag , routines[i].id));
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

}

export {RoutineApi};