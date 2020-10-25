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
        const result = await Api.post(RoutineApi.url + '/' + id + '/cycles', true, cycleData, controller);
        if (result.code) {
            return []
        }
        return result.id;
    }
    static async getAllCycles(routineId , controller){
        let cycles= await Api.get( RoutineApi.url + '/' + routineId + '/cycles' , true , controller);
        return cycles.results
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
        const cycles = await CycleApi.getAllCycles(routineId , controller);
        for ( let i = 0 ; i < cycles.length ; i++){
            await ExercisesApi.deleteAllExercisesFromCycle(routineId , cycles[i].id , controller);
            await CycleApi.deleteCycle(routineId , cycles[i].id , controller );
        }
    }
}

export { CycleApi};