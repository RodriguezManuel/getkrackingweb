import {Api} from "@/api/api";



class MediaApi{
    //adders
    static async addImageToExercise(urlImage , number, cycle_id , exercise_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/images';
        const send = {
            number: number,
            url : urlImage,
        }
        return await Api.post(path,true, send , controller );
    }
    static async addVideoToExercise(urlVideo , number, cycle_id , exercise_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/videos';
        const send = {
            number: number,
            url : urlVideo,
        }
        return await Api.post(path,true, send , controller );
    }
    //getters
    static async getImagesFromExercise(cycle_id , exercise_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/images';
        return await Api.get(path , true , controller);
    }
    static async getImageFromExercise(cycle_id , exercise_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/videos';
        return await Api.get(path , true , controller);
    }
    //putters
    static async editImagefromExercise(urlImage , number, cycle_id , exercise_id , image_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/images/' + image_id;
        const send = {
            number: number,
            url : urlImage,
        }
        return await Api.put(path,true, send , controller );
    }
    static async editVideofromExercise(urlVideo , number, cycle_id , exercise_id , video_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/videos/' + video_id;
        const send = {
            number: number,
            url : urlVideo,
        }
        return await Api.put(path,true, send , controller );
    }
    //deleters
    static async Deleteimage( cycle_id , exercise_id , image_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/images/' + image_id;
        return await Api.delete(path , true , controller);
    }

    static async deleteVideo( cycle_id , exercise_id , video_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercise/' + exercise_id + '/videos/' + video_id;
        return await Api.delete(path , true , controller);
    }
}

export {MediaApi};