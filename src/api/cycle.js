import { Api } from './api.js';
import { RoutineApi } from "@/api/routines";
import {ExercisesApi} from "@/api/exercises";

class CycleApi {
    static async addCycle(type, number, reps, id, controller) {
        const cycleData = {
            "name": type,
            "detail": type,
            "type": type,
            "order": number,
            "repetitions": reps
        };
        console.log("adding a cycle");
        const result = await Api.post(RoutineApi.url + '/' + id + '/cycles', true, cycleData, controller);
        if (result.code) {
            return []
        }
        return result.id;
    }

/*
    static async getCycle( routineId, cycleId , controller ){
        return await Api.get(RoutineApi.url+ '/' + routineId + '/cycles/', true , controller)M
    }*/
/*
    static async addBuildingCycle(type, number, id, controller) {
        const cycleData = {
            "name": type,
            "detail": type,
            "type": "warmup",
            "order": number,
            "repetitions": 1
        }
        return await Api.post(RoutineApi.url + '/' + id + '/cycles', true, cycleData, controller);

    }
*/
    static async deleteCycle( routineId , cycleId , controller){
        return await Api.delete(RoutineApi.url + '/' + routineId + '/cycles/' + cycleId, true , controller);

    }
    static async deleteAllCycles( routineId , controller ){
        let cycles= await Api.get( RoutineApi.url + '/' + routineId + '/cycles' , true , controller);
        cycles = cycles.results;
        for ( let i = 0 ; i < cycles.length ; i++){
            await ExercisesApi.deleteAllExercisesFromCycle(routineId , cycles[i].id , controller);
            await this.deleteCycle(routineId , cycles[i].id , controller );
        }
    }
}

export { CycleApi};