import { Api } from './api.js';
import {UserApi} from "@/api/user";
import { CycleApi} from "@/api/cycle";
const string_level =[ 'rookie', 'beginner', 'intermediate', 'advanced', 'expert' ];
let level = {};
level[string_level[0]]=1;
level[string_level[1]]=2;
level[string_level[2]]=3;
level[string_level[3]]=4;
level[string_level[4]]=5;

class Routine{
    constructor(name , detail , level , fav ,id , isOwner, creator) {
        this.name = name;
        this.detail = detail;
        this.level=level;
        this.fav = fav;
        this.id = id;
        this.isOwner = isOwner;
        this.creator = creator;
    }
}
class RoutineApi {
    static get url() {
        return Api.baseUrl + '/routines';
    }

    static isFav(routineid, favs){
        for ( let i = 0 ; i < favs.length; i++){
            if ( routineid === favs[i].id){
                return true;
            }
        }
        return false;
    }

    static difiAscending(allRoutines){
        let vector = [];
        for(var i = 0; i < string_level.length; i++){
            for(var j = 0; j < allRoutines.length; j++){
                if(allRoutines[j].level === i +1){
                    vector.push(allRoutines[j]);
                }
            }
        }
        return vector;
    }

    static difiDescending(allRoutines){
        let vector= [];
        for(var i = string_level.length -1; i >= 0; i--){
            for(var j = 0; j < allRoutines.length; j++){
                if(allRoutines[j].level === i +1){
                    vector.push(allRoutines[j]);
                }
            }
        }
        return vector;
    }


    static async getTypeRoutine(type , controller){
        const self = await Api.get(Api.baseUrl + '/user/current', true, controller);
        if (self.code) {
            console.log("ERROR");
            return self;
        }
        let favourites = await Api.get(Api.baseUrl + '/user/current/routines/favourites' , true , null);
        let routines = await Api.get(this.url+ '?page=0&size=99&orderBy=dateCreated&direction=asc', true, controller); //levantamos 99 rutinas de la página 0, cableado
        routines = routines.results;
        let vector = [];
        let favFlag;
        let isOwner;
        for (let i = 0 ; i < routines.length; i++ ) {
            if ( routines[i].id >= 8 ) {
                isOwner = routines[i].creator.id === self.id;
                favFlag = this.isFav(routines[i].id, favourites.results);
                vector.push(new Routine(routines[i].name, routines[i].detail, level[routines[i].difficulty],
                    favFlag, routines[i].id , isOwner, routines[i].creator));
            }
        }
        return vector;
    }

    static async getRoutines(controller) {
        const self = await Api.get(Api.baseUrl + '/user/current', true, controller);
        if (self.code) {
            console.log("ERROR");
            return self;
        }
        let favourites = await Api.get(Api.baseUrl + '/user/current/routines/favourites' , true , null);
        let routines = await Api.get(this.url+ '?page=0&size=99&orderBy=dateCreated&direction=asc', true, controller);
        routines = routines.results;
        let vector = [];
        let favFlag;
        let isOwner;
        for (let i = 0 ; i < routines.length; i++ ) {
            if ( routines[i].id !== 1 ) {
                isOwner = routines[i].creator.id === self.id;
                favFlag = this.isFav(routines[i].id, favourites.results);
                vector.push(new Routine(routines[i].name, routines[i].detail, level[routines[i].difficulty],
                    favFlag, routines[i].id , isOwner, routines[i].creator));
            }
        }
        return vector;
    }

    static async deleteFav( id , controller){
        return await Api.delete(Api.baseUrl+'/user/current/routines/'+ id +'/favourites' , true , controller);
    }

    static async addFav( id , controller){
        return await Api.post(Api.baseUrl+'/user/current/routines/'+ id +'/favourites' , true , controller);
    }
    static async deleteRoutine( id , controller){
        const result = await Api.get(this.url+ '/' + id ,true , null);
        const myInfo = await UserApi.getUserData();
        if ( result.creator.id === myInfo.id) {
            await CycleApi.deleteAllCycles(id , controller);
            return await Api.delete(this.url + '/' + id, true, controller);
        }
        return {
            code: 1,
            detail: 'notYourRoutine'
        }
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
        const result = await Api.post( this.url , true , data , controller);
        return result.id;
    }

    static async getRating(id, controller){
        let ratings = await Api.get(Api.baseUrl + '/routines/' + id + '/ratings', true, controller);
        let answer = 0;
        for(let i = 0; i < ratings.results.length ; i++){
            answer += ratings.results[i].score;
        }
        return {rating: answer/ratings.results.length, reviews: ratings.totalCount};
    }

    static async getMyRating(id, controller){
        let ratings = await Api.get(Api.baseUrl + '/routines/' + id + '/ratings', true, controller);
        let actualUser = await UserApi.getUserData(controller);
        for(let i = 0; i < ratings.results.length ; i++){
            if(ratings.results[i].review === actualUser.username){
                return ratings.results[i].score;
            }
        }
        return 0;
    }

    static async postRating(id, rate, controller){
        let actualUser = await UserApi.getUserData(controller);
        let data = {
            "score": rate,
            "review": actualUser.username
        }
        return await Api.post(Api.baseUrl + '/routines/' + id + '/ratings', true, data, controller);
    }
}

export {RoutineApi};