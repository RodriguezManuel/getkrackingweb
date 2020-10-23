<template>
  <v-card width="380px" height="100%" color="#4DB6AC" style="border-radius:25px">
    <div style="height: 30px">
      <p class="nombre">{{ routine.name }}</p>
    </div>
    <v-row >
      <v-col cols="7">
        <v-img :src="require('../assets/images/workout.png')" alt="Imagen rutina" style="margin-left: 5px"></v-img>

        <div style="text-align: center;">
          <v-icon small color="#FFFFFF"> mdi-clock-time-five-outline</v-icon>
          <a class="texto"> {{ time }} minutos</a>
        </div>
      </v-col>

      <v-col>
        <p class="texto" style="margin-bottom: 0;">Dificultad</p>
        <div>
          <a v-for="n in 5" :key="n">
            <v-icon small v-if="n <= routine.level">mdi-checkbox-blank-circle</v-icon>
            <v-icon small v-else>mdi-checkbox-blank-circle-outline</v-icon>
          </a>
        </div>
        <div>
          <p class="texto" style="margin-bottom: 0;">Flexibilidad</p>
          <a v-for="n in 5" :key="n">
            <v-icon small v-if="n <= flex">mdi-checkbox-blank-circle</v-icon>
            <v-icon small v-else>mdi-checkbox-blank-circle-outline</v-icon>
          </a>
        </div>
      </v-col>
    </v-row>

    <v-row class="mx-3" style="margin-top:-10px">
      <p class="texto">{{ routine.detail }}</p>
    </v-row>

    <v-btn x-large icon @click="toggleFav" style="position: absolute; top: 4%; right: 3px; z-index: 1;">
      <v-icon color="pink">{{ (routine.fav === true) ? 'mdi-heart' : 'mdi-heart-plus-outline' }}</v-icon>
    </v-btn>

    <v-btn small icon v-if="instrumentos" style="position: absolute; top: 20%; right: 13px; z-index: 1;">
      <v-icon color="black">fas fa-dumbbell</v-icon>
    </v-btn>

    <v-btn large icon style="position: absolute; top: 29%; right: 7px; z-index: 1;">
      <v-icon color="black">mdi-pencil</v-icon>
    </v-btn>

    <v-btn v-on:click="deleteRoutine" large icon style="position: absolute; top: 40%; right: 7px; z-index: 1;">
      <v-icon color="black">mdi-trash-can-outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import { RoutineApi } from '@/api/routines'
export default {
  props: [ "routine" ],
  name: "workoutCard",
  data() {
    return {
      time: 5,
      flex: 3,
      instrumentos: true,
    }
  },
  methods: {
    async toggleFav(){
      let result;
      if ( !this.routine.fav ){
        result = await RoutineApi.addFav(this.routine.id , null);
      }else{
        console.log("Deleting");
        result = await RoutineApi.deleteFav( this.routine.id , null );
      }
      if( !result.code) {
        this.routine.fav = !this.routine.fav;
      }else{
        console.log("ERROR");
      }
    },
    async deleteRoutine(){
    let result = await RoutineApi.deleteRoutine(this.routine.id, null);
      if ( !result.code){
        location.assign("/rutinas");
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

@font-face {
  font-family: "NotoSans-Regular";
  src: url("../assets/fonts/NotoSans-Regular.ttf");
}

.nombre {
  font-family: NotoSans-Bold;
  font-size: 26px;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  top: 5px;
}

.texto {
  font-family: NotoSans-Regular;
  font-size: 16px;
  color: #FFFFFF;
}

</style>