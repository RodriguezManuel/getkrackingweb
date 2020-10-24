import {Api} from "@/api/api";
import { RoutineApi } from "@/api/routines";

class Builder {
    static async getAllRoutines( controller){
        let routines = await Api.get(RoutineApi.url + '?page=0&size=99&orderBy=dateCreated&direction=asc', true, controller);
        routines = routines.results;
        let vector = [];
        for (let i = 0 ; i < routines.length; i++ ) {
            vector.push({ id: routines[i].id});
        }
        console.log(vector);
        return vector;
    }
    static async buildMaster() {
       // await Api.delete(RoutineApi.url + '/1', true, null);
        const routines = await this.getAllRoutines(null);
        for (let i = 0; i < routines.length; i++) {
            console.log("deleting routine:" + routines[i].id);
            await RoutineApi.deleteRoutine(routines[i].id , null);
        }
        const categoryData = {
            "name": "Master",
            "detail": "Master"
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
            "type": "warmup",
            "order": 1,
            "repetitions": 1
        };

        const data2 = {
            "name": "Triceps",
            "detail": "Triceps",
             "type": "warmup",
             "order": 2,
             "repetitions": 1
        };

        const data3 = {
            "name": "Pecho",
            "detail": "Pecho",
            "type": "warmup",
            "order": 3,
            "repetitions": 1
        };

        const data4 = {
            "name": "Espalda",
            "detail": "Espalda",
            "type": "warmup",
            "order": 4,
            "repetitions": 1
    };

        const data5 = {
            "name": "Abdominales",
            "detail": "Abdominales",
            "type": "warmup",
            "order": 5,
            "repetitions": 1
        };

        const data6 = {
            "name": "piernas",
            "detail": "piernas",
            "type": "warmup",
            "order": 6,
            "repetitions": 1
        };
        const vec = [];
        vec.push(data1);
        vec.push(data2);
        vec.push(data3);
        vec.push(data4);
        vec.push(data5);
        vec.push(data6);
        console.log("new category");
        await Api.post(Api.baseUrl + '/categories', true, categoryData, null);
        console.log("new routine");
        await Api.post(RoutineApi.url, true, data, null);

        for ( let i = 0 ; i < vec.length ; i++ ) {
            console.log("new cycle");
            await Api.post(RoutineApi.url + '/1/cycles', true, vec[i] , null);
        }
    }
}

export { Builder };

