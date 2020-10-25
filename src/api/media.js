import {Api} from "@/api/api";


const string_type= [ 'Biceps', 'Triceps', 'Pecho', 'Espalda', 'Abdominales', 'Piernas'];


let tipos= {};
tipos[string_type[0]] = 1;
tipos[string_type[1]] = 2;
tipos[string_type[2]] = 3;
tipos[string_type[3]] = 4;
tipos[string_type[4]] = 5;
tipos[string_type[5]] = 6;

class MediaApi{
    static async getCycleId( type ){
        if ( !string_type.includes(type)) {
            return -1;
        }else
        {
            return tipos[type];
        }
    }
    //adders
    static async addImageToExercise(urlImage , number, cycle_id , exercise_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/images';
        const send = {
            number: number,
            url : urlImage,
        }
        return await Api.post(path,true, send , controller );
    }
    static async addVideoToExercise(urlVideo , number, cycle_id , exercise_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/videos';
        const send = {
            number: number,
            url : urlVideo,
        }
        return await Api.post(path,true, send , controller );
    }
    //getters
    static async getImagesFromExercise(cycle_id , exercise_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/images';
        return await Api.get(path , true , controller);
    }
    static async getVideosFromExercise(cycle_id , exercise_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/videos';
        return await Api.get(path , true , controller);
    }
    //putters
    static async editImagefromExercise(urlImage , number, cycle_id , exercise_id , image_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/images/' + image_id;
        const send = {
            number: number,
            url : urlImage,
        }
        return await Api.put(path,true, send , controller );
    }
    static async editVideofromExercise(urlVideo , number, cycle_id , exercise_id , video_id , controller){
        const path = Api.baseUrl + '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/videos/' + video_id;
        const send = {
            number: number,
            url : urlVideo,
        }
        return await Api.put(path,true, send , controller );
    }
    //deleters
    static async deleteImage( cycle_id , exercise_id , image_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/images/' + image_id;
        return await Api.delete(path , true , controller);
    }

    static async deleteVideo( cycle_id , exercise_id , video_id , controller ){
        const path = Api.baseUrl+ '/routines/1/cycles/' + cycle_id + '/exercises/' + exercise_id + '/videos/' + video_id;
        return await Api.delete(path , true , controller);
    }

    static async deleteAllImages(cycle_id , exercise_id , controller ){
        const all = await MediaApi.getImagesFromExercise( cycle_id , exercise_id , controller);
        for ( let i = 0 ; i < all.results.length ; i++){
            await MediaApi.deleteImage(cycle_id , exercise_id , all.results[i].id , controller);
        }
    }

    static async deleteAllVideos(cycle_id , exercise_id , controller ){
        const all = await MediaApi.getVideosFromExercise( cycle_id , exercise_id , controller);
        for ( let i = 0 ; i < all.results.length ; i++){
            await MediaApi.deleteVideo(cycle_id , exercise_id , all.results[i].id , controller);
        }
    }

    static async cleanMedia(cycle_id , exercise_id , controller){
       await MediaApi.deleteAllImages(cycle_id,exercise_id,controller);
       await MediaApi.deleteAllVideos(cycle_id,exercise_id , controller);
    }

}

export {MediaApi};