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
        await Api.delete(RoutineApi.url + '/1', true, null);
        const routines = await this.getAllRoutines(null);
        for (let i = 0; i < routines.length; i++) {
            console.log("deleting routine:" + routines[i].id);
            await Api.delete(RoutineApi.url + '/' + routines[i].id, true, null);
        }
        const categoryData = {
            "name": "Master",
            "detail": "Master"
        };
        const cycleData = {
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
        await Api.post(Api.baseUrl + '/categories', true, categoryData, null);
        for (let i = 0; i < vec.length; i++) {
            console.log("new routine");
            await Api.post(RoutineApi.url, true, vec[i], null);
            console.log("new cycle");
            await Api.post(RoutineApi.url + '/' + (i + 1) + '/cycles', true, cycleData, null);
        }
    }
}

export { Builder };

