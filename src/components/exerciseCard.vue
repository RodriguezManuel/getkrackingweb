<template>
  <v-card width="380px" height="100%" color="#4DB6AC" style="border-radius:25px">
    <div style="height: 35px">
      <p class="nombre">{{ exercise_object.name }}</p>
    </div>
    <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" class="ma-5"></v-img>

    <v-btn v-on:click="redirect()" large icon style="position: absolute; top: 2%; right: 5px; z-index: 1;" >
      <v-icon color="black">mdi-pencil</v-icon>
    </v-btn>
    <v-btn v-on:click="deleteExercise()" large icon style="position: absolute; top: 2%; left: 5px; z-index: 1;">
      <v-icon color="black">mdi-trash-can-outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import {ExercisesApi} from "@/api/exercises";

export default {
  name: "exerciseCard",
  props: ["exercise_object" , "type" ],
  data(){
    return {
      title: 'EDITAR EJERCICIO',
    }
  },
  methods:{
    redirect(){
      let path = "/editar_ejercicio/" + this.exercise_object.id + '/' + this.exercise_object.type;
      location.assign(path);
    },
    async deleteExercise(){
      const result = await ExercisesApi.deleteMasterExercise(this.exercise_object.id , this.exercise_object.type,null);
      console.log(result);
      if ( !result.code){
        location.assign("/ejercicios");
      }else{
        console.log("ERROR");
      }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "NotoSans-Bold";
  src: url("../assets/fonts/NotoSans-Bold.ttf");
}

.nombre {
  font-family: NotoSans-Bold, sans-serif;
  font-size: 26px;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  top: 5px;
}

</style>