import { Api } from './api.js';
import { RoutineApi } from "@/api/routines";

class CycleApi {
    static async addCycle( type , number , reps , id , controller){
        const cycleData= {
            "name": type,
            "detail": type,
            "type": type,
            "order": number,
            "repetitions": reps
        };
        const result = await Api.post( RoutineApi.url + '/' + id + '/cycles' , true , cycleData , controller);
        if(result.code){
            console.log(result.detail);
        }
        return result.id;
    }
    static async deleteCycle( routineId , cycleId , controller){
        return await Api.delete(RoutineApi.url + '/' + routineId + '/cycles/' + cycleId, true , controller);

    }
    static async deleteAllCycles( routineId , controller ){
        let cycles = await Api.get( RoutineApi.url + '/' + routineId + '/cycles' , true , controller);
        cycles = cycles.results;
        for ( let i = 0 ; i < cycles.length ; i++){
            await this.deleteCycle(routineId , cycles.results[i].id , controller );
        }

    }
}

export { CycleApi};